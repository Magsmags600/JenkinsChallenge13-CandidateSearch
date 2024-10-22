import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API'; 
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  const [noMoreCandidates, setNoMoreCandidates] = useState(false);

  // Fetch candidates and detailed information
  useEffect(() => {
    const fetchCandidates = async () => {
      const data = await searchGithub();
      if (data.length > 0) {
        const detailedData = await Promise.all(
          data.map((candidate: Candidate) => searchGithubUser(candidate.login))
        );
        console.log("Detailed Data:", detailedData); // Debugging the detailed data
        setCandidates(detailedData);
        setCurrentCandidate(detailedData[0]);
      } else {
        setNoMoreCandidates(true);
      }
    };
    fetchCandidates();
  }, []);

  const handleSaveCandidate = () => {
    if (currentCandidate) {
      const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      const isAlreadySaved = savedCandidates.some(
        (candidate: Candidate) => candidate.id === currentCandidate.id
      );
      if (!isAlreadySaved) {
        localStorage.setItem(
          'savedCandidates',
          JSON.stringify([...savedCandidates, currentCandidate])
        );
      }
    }
    showNextCandidate();
  };

  const showNextCandidate = () => {
    if (candidates.length > 1) {
      const [, ...rest] = candidates;
      setCandidates(rest);
      setCurrentCandidate(rest[0]);
    } else {
      setNoMoreCandidates(true);
      setCurrentCandidate(null);
    }
  };

  const getCandidateInfo = (field: string | null | undefined, fallback: string) => {
    return field && field.trim() !== "" ? field : fallback;
  };

  return (
    <section>
      {noMoreCandidates ? (
        <h2>No more candidates available</h2>
      ) : currentCandidate ? (
        <div>
          <img src={currentCandidate.avatar_url} alt={`${currentCandidate.name || 'Name not available'}'s avatar`} />
          <h2>{getCandidateInfo(currentCandidate.name, 'Name not available')}</h2>
          <p>Username: {currentCandidate.login}</p>
          <p>Location: {getCandidateInfo(currentCandidate.location, 'Location not available')}</p>
          <p>Email: {getCandidateInfo(currentCandidate.email, 'Email not available')}</p>
          <p>Company: {getCandidateInfo(currentCandidate.company, 'Company not available')}</p>
          <a href={currentCandidate.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
          <div>
            <button onClick={handleSaveCandidate}>Save Candidate</button>
            <button onClick={showNextCandidate}>Skip Candidate</button>
          </div>
        </div>
      ) : (
        <h2>Loading candidate...</h2>
      )}
    </section>
  );
};

export default CandidateSearch;

import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface'; // Consistent casing

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const data = await searchGithub();
        setCandidates(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch candidates.');
        setLoading(false);
      }
    };
    fetchCandidates();
  }, []);

  const loadNextCandidate = () => {
    if (candidates.length > 0) {
      const nextCandidate = candidates.shift();
      setCandidate(nextCandidate || null);
    } else {
      setCandidate(null);
    }
  };

  const saveCandidate = () => {
    if (candidate) {
      const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      savedCandidates.push(candidate);
      localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
    }
    loadNextCandidate();
  };

  const skipCandidate = () => {
    loadNextCandidate();
  };

  return (
    <div>
      <h1>Candidate Search</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {candidate ? (
        <div>
          <img src={candidate.avatar_url} alt="Candidate Avatar" />
          <p>Name: {candidate.name || 'N/A'}</p>
          <p>Username: {candidate.login}</p>
          <p>Location: {candidate.location || 'N/A'}</p>
          <p>Email: {candidate.email || 'N/A'}</p>
          <p>Company: {candidate.company || 'N/A'}</p>
          <a href={candidate.html_url}>GitHub Profile</a>
          <div>
            <button onClick={saveCandidate}>+</button>
            <button onClick={skipCandidate}>-</button>
          </div>
        </div>
      ) : (
        <p>No more candidates available.</p>
      )}
    </div>
  );
};

export default CandidateSearch;

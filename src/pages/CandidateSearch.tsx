import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API'; // Use the searchGithub function
import { Candidate } from '../interfaces/Candidate.interface'; // Import the Candidate interface

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]); // Store the list of candidates
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0); // Track the current candidate being displayed
  const [loading, setLoading] = useState(true); // Handle loading state
  const [error, setError] = useState<string | null>(null); // Handle error messages

  // Fetch multiple candidates from the GitHub API
  useEffect(() => {
    const fetchCandidates = async () => {
      setLoading(true);
      try {
        const data = await searchGithub(); // Fetch candidates
        setCandidates(data); // Set the fetched candidates
        setCurrentCandidateIndex(0); // Reset the current candidate index
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch candidates.');
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []); // Fetch candidates when the component mounts

  // Move to the next candidate
  const nextCandidate = () => {
    if (currentCandidateIndex < candidates.length - 1) {
      setCurrentCandidateIndex(currentCandidateIndex + 1);
    }
  };

  // Move to the previous candidate
  const previousCandidate = () => {
    if (currentCandidateIndex > 0) {
      setCurrentCandidateIndex(currentCandidateIndex - 1);
    }
  };

  const currentCandidate = candidates[currentCandidateIndex]; // The candidate currently being displayed

  return (
    <div>
      <h1>Candidate Search</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {/* Display the current candidate's information */}
      {currentCandidate ? (
        <div>
          <img src={currentCandidate.avatar_url} alt="Candidate Avatar" />
          <p>Name: {currentCandidate.login}</p>
          <a href={currentCandidate.html_url}>GitHub Profile</a>
          <div>
            <button onClick={previousCandidate} disabled={currentCandidateIndex === 0}>
              Previous
            </button>
            <button onClick={nextCandidate} disabled={currentCandidateIndex === candidates.length - 1}>
              Next
            </button>
          </div>
        </div>
      ) : (
        <p>No candidates available.</p>
      )}
    </div>
  );
};

export default CandidateSearch;

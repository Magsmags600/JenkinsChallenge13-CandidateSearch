import { useEffect, useState } from 'react';
import { Candidate } from '../interfaces/Candidate.interface'; // Ensure the Candidate interface is correctly imported

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  // Fetch saved candidates from localStorage when the component mounts
  useEffect(() => {
    const candidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(candidates); // Set the fetched candidates in state
  }, []);

  return (
    <div>
      <h1>Potential Candidates</h1>
      {/* If there are saved candidates, display them */}
      {savedCandidates.length > 0 ? (
        savedCandidates.map((candidate, index) => (
          <div key={index}>
            <img src={candidate.avatar_url} alt="Candidate Avatar" />
            <p>Name: {candidate.login}</p>
            <a href={candidate.html_url}>GitHub Profile</a>
          </div>
        ))
      ) : (
        <p>No saved candidates.</p> // Message if no candidates are saved
      )}
    </div>
  );
};

export default SavedCandidates;

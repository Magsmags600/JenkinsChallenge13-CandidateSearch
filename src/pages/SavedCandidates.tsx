import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface'; // Consistent casing

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const candidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(candidates);
  }, []);

  return (
    <>
      <h1>Potential Candidates</h1>
      {savedCandidates.length > 0 ? (
        savedCandidates.map((candidate) => (
          <div key={candidate.login}>
            <img src={candidate.avatar_url} alt="Candidate Avatar" />
            <p>Name: {candidate.name || 'N/A'}</p>
            <p>Username: {candidate.login}</p>
            <p>Location: {candidate.location || 'N/A'}</p>
            <p>Email: {candidate.email || 'N/A'}</p>
            <p>Company: {candidate.company || 'N/A'}</p>
            <a href={candidate.html_url}>GitHub Profile</a>
          </div>
        ))
      ) : (
        <p>No saved candidates.</p>
      )}
    </>
  );
};

export default SavedCandidates;

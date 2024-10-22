import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface'; 

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  // Fetch saved candidates from localStorage when the component mounts
  useEffect(() => {
    const candidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    console.log("Saved Candidates:", candidates); // Log the saved data
    setSavedCandidates(candidates); 
  }, []);

  return (
    <section>
      <h1>Potential Candidates</h1>
      {savedCandidates.length > 0 ? (
        <ul>
          {savedCandidates.map((candidate) => (
            <li key={candidate.id}>
              <img src={candidate.avatar_url} alt={`${candidate.name || 'Name not available'}'s avatar`} />
              <h2>{candidate.name || 'Name not available'}</h2>
              <p>Username: {candidate.login}</p>
              <p>Location: {candidate.location || 'Location not available'}</p>
              <p>Email: {candidate.email || 'Email not available'}</p>
              <p>Company: {candidate.company || 'Company not available'}</p>
              <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                View GitHub Profile
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <h2>No candidates have been saved</h2>
      )}
    </section>
  );
};

export default SavedCandidates;

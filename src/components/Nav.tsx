import { Link } from 'react-router-dom';

// This file defines the navigation bar
const Nav = () => {
  return (
    <nav>
      <ul>
        {/* Links to the Candidate Search and Saved Candidates pages */}
        <li>
          <Link to="/">Candidate Search</Link>
        </li>
        <li>
          <Link to="/SavedCandidates">Saved Candidates</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App'; // Main App component
import CandidateSearch from './pages/CandidateSearch'; // Candidate search component
import SavedCandidates from './pages/SavedCandidates'; // Saved candidates component
import ErrorPage from './pages/ErrorPage'; // Error page for invalid routes

// Define your routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />, // Show this on invalid routes
    children: [
      {
        index: true,
        element: <CandidateSearch />, // Default route (Candidate Search page)
      },
      {
        path: '/savedCandidates',
        element: <SavedCandidates />, // Route for saved candidates
      },
    ],
  },
]);

// Find the root element in the HTML and render the application
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}

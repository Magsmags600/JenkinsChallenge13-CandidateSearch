import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import CandidateSearch from './pages/CandidateSearch.tsx'; // Importing CandidateSearch component
import SavedCandidates from './pages/SavedCandidates.tsx'; // Importing SavedCandidates component
import ErrorPage from './pages/ErrorPage.tsx'; // Importing ErrorPage component

// Creating a router without the App component
const router = createBrowserRouter([
  {
    path: '/',
    element: <CandidateSearch />, // Root route displays CandidateSearch directly
    errorElement: <ErrorPage />, // Error page for invalid routes
    children: [
      {
        path: '/SavedCandidates',
        element: <SavedCandidates />, // SavedCandidates page
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}

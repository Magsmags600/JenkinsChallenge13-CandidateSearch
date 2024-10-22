// Interface for Candidate objects returned by the API
export interface Candidate {
  id: number;
  login: string; // GitHub username
  avatar_url: string; // Profile picture
  name: string; // Candidate's full name
  location: string | null; // Location, if available
  email: string | null; // Email, if available
  company: string | null; // Company name, if available
  html_url: string; // Link to the candidate's GitHub profile
}

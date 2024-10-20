// This interface defines the structure of a candidate object returned by the GitHub API
export interface Candidate {
    login: string; // GitHub username
    avatar_url: string; // Avatar image URL
    html_url: string; // Profile URL
    email?: string; // Email (optional)
    name?: string; // Full name (optional)
    company?: string; // Company name (optional)
    location?: string; // Location (optional)
  }
  
# Candidate Search Application

## Description

The Candidate Search Application allows users to search and review candidates from GitHub. Users can save candidates to a list of potential candidates or skip them. The application displays information for each candidate and allows users to manage their list of potential candidates. The list is persistent and will be available even after reloading the page.

## Features

- Displays a candidate's information including:
  - Name
  - Username
  - Location
  - Avatar
  - Email
  - GitHub Profile (`html_url`)
  - Company
- Save candidates to a list of potential candidates.
- Skip candidates without saving them.
- Show a message when there are no more candidates to review.
- Display a list of saved potential candidates.
- Persist the list of potential candidates across page reloads.
- Show a message when no candidates have been saved.

## User Stories

### Candidate Search

- **GIVEN** a candidate search application
- **WHEN** the candidate search page loads
- **THEN** the information for one candidate should be displayed, including the candidate's:
  - Name
  - Username
  - Location
  - Avatar
  - Email
  - GitHub Profile (`html_url`)
  - Company

- **WHEN** I click the "Save Candidate" button
- **THEN** the candidate should be saved to the list of potential candidates and the next candidate's information should be displayed.

- **WHEN** I click the "Skip Candidate" button
- **THEN** the next candidate's information should be displayed without saving the current candidate.

- **WHEN** there are no candidates available to review
- **THEN** an appropriate message should be shown indicating no more candidates are available.

### Potential Candidates List

- **GIVEN** the potential candidates page
- **WHEN** the page loads
- **THEN** the user should see a list of previously saved potential candidates with their:
  - Name
  - Username
  - Location
  - Avatar
  - Email
  - GitHub Profile (`html_url`)
  - Company

- **WHEN** the page reloads
- **THEN** the list of potential candidates should persist and be available for viewing.

- **WHEN** there are no potential candidates
- **THEN** an appropriate message should be displayed indicating no candidates have been accepted.

- **WHEN** I click the "-" button
- **THEN** the next candidate's information should be displayed without saving the current candidate.

## Installation

Git Repository: https://github.com/Magsmags600/JenkinsChallenge13-CandidateSearch
#
Deployed site: https://jenkinschallenge13-candidatesearch-13.onrender.com

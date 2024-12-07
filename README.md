# HYPERLOADOUT

**Live URL**: [hyperloadout.web.app](https://hyperloadout.web.app/)

**Backup**: [hyperloadout.surge.sh](https://hyperloadout.surge.sh)

HyperLoadout is a feature-rich web application designed for managing and showcasing eSports equipment. It includes user authentication, a fully functional CRUD system, and sorting capabilities, all powered by modern web technologies.

## Key Features

- **Authentication with Firebase**:
  - Login, Registration, and Google Authentication for secure access.
- **CRUD Operations**:

  - Powered by MongoDB Atlas, users can add, update, delete, and view equipment details.

- **Sorting Functionality**:

  - Products can be sorted in ascending or descending order based on price using MongoDB queries.

- **Private Routes**:

  - Restricted access to specific pages and functionalities. Users must log in to perform actions like adding, updating, or deleting products.

- **User-Specific Permissions**:
  - Users can only edit or delete products that were created with their account/email.

## Technology Stack

- **Frontend**: React.js, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: Firebase Authentication
- **Hosting**: Firebase Hosting
- **Routing**: React Router DOM

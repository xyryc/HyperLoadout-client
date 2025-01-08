# HYPERLOADOUT

Live: [https://hyperloadout.web.app/](https://hyperloadout.web.app/)  
Live Backup: [https://hyperloadout.surge.sh/](https://hyperloadout.surge.sh/)  
Client Repo: [https://github.com/xyryc/HyperLoadout-client](https://github.com/xyryc/HyperLoadout-client)  
Server Repo: [https://github.com/xyryc/HyperLoadout-server](https://github.com/xyryc/HyperLoadout-server)

---

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


## How to Run Locally

Follow these steps to set up and run the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/xyryc/HyperLoadout-client.git
   cd HyperLoadout-client
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Add Firebase configuration:**

   - Create a `.env.local` file in the root directory and add your Firebase config keys:

   ```bash
    VITE_apiKey=your_api_key
    VITE_authDomain=your_auth_domain
    VITE_projectId=your_project_id
    VITE_storageBucket=your_project_bucket
    VITE_messagingSenderId=your_messaging_sender_id
    VITE_appId=your_app_id
    VITE_API_URL=backend_server_url
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. **Open the app in your browser:**
   ```bash
   http://localhost:5173/
   ```

## Contribution

Feel free to fork the repository, make improvements, and submit a pull request. For major changes, open an issue first to discuss the proposed changes.


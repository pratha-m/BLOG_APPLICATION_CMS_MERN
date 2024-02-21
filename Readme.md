# Blogii - A React and Vite-powered Blog Website

Blogii is a modern blog website developed using React, Vite, Node.js, Express.js, and MongoDB. It offers a sleek and user-friendly interface for managing blog posts, user authentication, and more.

## Getting Started

### Prerequisites
- Reactjs (https://react.dev/)
- Node.js (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/)
- npm (comes with Node.js installation)

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/pratha-m/BLOG_APPLICATION_CMS_MERN.git
   cd BLOG_APPLICATION_CMS_MERN  # Go to the main folder
   ```

2. **Install Dependencies:**
   ```bash
   # Navigate to the client folder and install client dependencies
   cd client
   npm install

   # Navigate to the server folder and install server dependencies
   cd server
   npm install
   ```

3. **Setup Environment Variables:**
   - Create a `.env` file in the root of both the `client` and `server` folders.
   - In `client/.env`:
     ```
     VITE_BASE_URL="your-server-url"
     ```
   - In `server/.env`:
     ```
     MONGO_URI="Your-Mongodb-Url"
     JWT_SECRET="Your-JWT-Secret"
     FROM_EMAIL="Your-Email"
     FROM_PASSWORD="Your-Email-App-Password (Not Gmail account Password)"
     PORT=your-backend-port-number
     ```

4. **Run the Application:**
   - Start the client:
     ```bash
     # In the client folder
     npm run dev
     ```
   - Start the server:
     ```bash
     # In the server folder
     npm run dev
     ```

## Features

1. **User Authentication:**
   - Secure login and signup functionality.

2. **Password Recovery:**
   - Forgot password feature for password recovery.

3. **Create and Delete Posts:**
   - Users can create and delete blog posts.

## Contributing

If you'd like to contribute to Blogii, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

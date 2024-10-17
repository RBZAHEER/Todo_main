# MERN Todo List Application

This is a full-stack Todo List application built using the MERN stack (MongoDB, Express.js, React, Node.js). The application allows users to sign in, create, update, delete, and view their personal todo items.

## Features

- User authentication using JWT (JSON Web Token)
- Secure routes for managing todo items (CRUD operations)
- Users can create, update, and delete their own todos
- Responsive UI using React.js and Axios for API requests
- Express.js and Node.js as the backend server with RESTful API endpoints
- MongoDB as the database for storing todos and user data

## Tech Stack

### Frontend
- **React.js**
- **Axios** (for making HTTP requests)
- **CSS/SCSS** for styling

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** (with Mongoose)
- **JWT** for authentication

## Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com/downloads)

### Steps to Run the Project

1. **Clone the repository**

   ```bash
   git clone https://github.com/RBZAHEER/Todo_main.git
   cd Todo_main
   ```

2. **Backend Setup**

   - Navigate to the backend folder:

     ```bash
     cd Backend
     ```

   - Install the required dependencies:

     ```bash
     npm install
     ```

   - Create a `.env` file and add your environment variables:

     ```bash
     PORT=5000
     MONGODB_URI=<your_mongodb_connection_uri>
     JWT_SECRET_TOKEN=<your_jwt_secret_key>
     NODE_ENV=development
     ```

   - Run the backend server:

     ```bash
     npm start
     ```

   The backend server should now be running on [http://localhost:5000](http://localhost:5000).

3. **Frontend Setup**

   - Navigate to the frontend folder:

     ```bash
     cd ../Frontend
     ```

   - Install the frontend dependencies:

     ```bash
     npm install
     ```

   - Run the frontend application:

     ```bash
     npm start
     ```

   The frontend should now be running on [http://localhost:3000](http://localhost:3000).

## API Endpoints

### Authentication

- **POST** `/auth/login` - Logs in the user and generates a JWT token
- **POST** `/auth/register` - Registers a new user

### Todos

- **GET** `/todo/gettodos` - Fetch all todos for the logged-in user
- **POST** `/todo/createTodo` - Create a new todo
- **PUT** `/todo/updateTodo/:id` - Update a specific todo
- **DELETE** `/todo/deleteTodo/:id` - Delete a specific todo

## Important Notes

- Make sure your MongoDB instance is running before starting the server.
- The frontend app expects the backend to run on `http://localhost:5000` by default. If the backend is running on a different port, update the API calls in your React app accordingly.
- To run the project in production, ensure that the `NODE_ENV` is set to `production` and adjust the cookie settings accordingly for secure JWT handling.

## Troubleshooting

1. **Unauthorized Error (401) on Fetching Todos**
   - Ensure that JWT tokens are being stored in the cookies and are passed along with each request.
   - Verify the `authenticate` middleware is correctly checking the token.

2. **Frontend Not Connecting to Backend**
   - Check that the backend is running on the correct port and that CORS is properly configured.
   - Ensure that API calls are using the correct backend URL.

## License

This project is licensed under the MIT License.

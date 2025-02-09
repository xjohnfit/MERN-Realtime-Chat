# MERN Realtime Chat Application

This is a realtime chat application built using the MERN stack (MongoDB, Express, React, Node.js) with Socket.IO for realtime communication.

## Features

- User authentication (signup, login, logout)
- Realtime messaging with Socket.IO
- Protected routes with JWT authentication
- User profile with avatars
- Responsive design with Tailwind CSS and DaisyUI

## Project Structure

```sh
.env
.gitignore
backend/
 controllers/
  auth.controller.js
  message.controller.js
  user.controller.js
 db/
  connectToMongoDB.js
 middleware/
  protectRoute.js
 models/
  conversation.model.js
  message.model.js
  user.model.js
 routes/
  auth.routes.js
  message.routes.js
  user.routes.js
 server.js
 socket/
  socket.js
 utils/
  generateToken.js
frontend/
 .eslintrc.cjs
 index.html
 package.json
 postcss.config.js
 public/
  ...
 README.md
 src/
  components/
  context/
  hooks/
  pages/
  utils/
  zustand/
 tailwind.config.js
 vite.config.js
package.json
README.md
```

## Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/MERN-Realtime-Chat.git
cd MERN-Realtime-Chat
```

2. Install backend dependencies:

```sh
npm install
```

3. Install frontend dependencies:

```sh
cd frontend
npm install
```

4. Create a .env file in the root directory and add the following environment variables:

```
MONGO_DB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
PORT=5000
```

## Running the Application

1. Start the backend server:

```sh
npm run server
```

2. Start the frontend development server:

```sh
cd frontend
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`.

## Building for Production

To build the application for production, run the following command:

```sh
npm run build
```

This will create a `dist` folder in the frontend directory with the production build of the application.

## License

This project is licensed under the MIT License.

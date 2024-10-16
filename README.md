# GDU-Club-Website-BE (GameDevUtopia Club Backend)
### Live Website
```bash
https://gdu-club-website-be.onrender.com
```

Welcome to the GameDevUtopia Website Backend repository. This project is built using Express, Node.js, and Mongoose to provide a robust and scalable backend for the website.

## About
This project is the backend part of the GameDevUtopia website. It leverages Express for building the server, Node.js for the runtime environment, and Mongoose for interacting with the MongoDB database. The backend handles user authentication, data processing, and API integration, providing the necessary functionality to support the frontend.

### Technologies Used
- **Express**: A minimal and flexible Node.js web application framework for building APIs and handling HTTP requests.
- **Node.js**: A JavaScript runtime that allows server-side code execution and scalable network applications.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js, providing a schema-based solution to model and manage application data.
- **MongoDB**: A NoSQL database used for storing application data in a flexible, document-based format.

## Installation

To get a local copy up and running, follow these simple steps:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/Game-Dev-Utopia/Game-Dev-Utopia-backend
    ```

2. **Navigate to the project directory:**

    ```sh
    cd Game-Dev-Utopia-backend
    ```

3. **Install dependencies:**

    ```sh
    npm install
    ```

4. **Set up environment variables:**
   
   Create a `.env` file in the root of the project and add the following variables:
   
   ```properties
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   PORT=8080
   ```

5. **Run the project:**

    ```sh
    npm run dev
    ```

## Contribution Guide

Thank you for considering contributing to our project! We appreciate your interest and look forward to collaborating with you. To ensure effective cooperation, please adhere to the guidelines provided in this document.

## Naming Conventions

### Commit Messages

#### Single Change Format

Please follow this format for commit messages:

**Message**: `<type>(<scope>): <subject>`

**Types**: new, add, fix, docs, style, refactor, test

**Examples**:
- `new(api): created user authentication API`
- `add(database): added mongoose models`
- `fix(routes): resolved issue with GET request`

#### Multiple Changes Format

Please follow this format for multiple changes:

**Message**: `<Action>`

**Description**: `[ <type>(<scope>): <subject> ]`

**Actions**: Major changes, Minor changes, Bug fixes

**Examples**:
- **Message**: `Major changes`
- **Description**: 
  - `add(database): added mongoose models`
  - `fix(routes): resolved issue with GET request`

### File and Function Naming

- **File Names**: Use lowercase with hyphens.
  - Example: `user-model.js`, `auth-routes.js`
- **Function Names**: Use camelCase.
  - Example: `getUserData`, `handleLogin`

## Contact

For any questions or inquiries, please contact.

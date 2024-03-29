# GDU-Club-Website-BE (GameDevUtopia Club Backend)
### Live Website
```bash
https://gdu-club-website-be.onrender.com
```

Welcome to the backend repository for the GameDevUtopia Club's official website. This backend supports all branches of the club, fostering innovation in Games, Designs, and providing assistance to aspiring talents across various domains.

## Table of Contents
- [Getting Started](#getting-started)
  - [Install Dependencies](#1-install-dependencies)
  - [Create .env file](#2-create-env-file)
  - [Start the Server](#3-start-the-server)

## Getting Started

### 1. Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```
### 2. Create .env file

Create a .env file in the root of your project and add the following content:
```bash
ATLAS_URI=<your MongoDB Atlas cluster URL>
```
```bash
JWT_SECRET="GDU_backend"
```
```bash
PORT = "8080"
```

### 3. Start the Server

Launch the server using the following command:

```bash
npm start
```
This will start the backend server, and you can access it at the specified port (usually http://localhost:8080).

# My Node.js Application with MongoDB

## Overview

This application is a Node.js web server that connects to a MongoDB database. It provides a simple API to manage user data. The application is containerized using Docker and orchestrated with Docker Compose, allowing for easy setup and deployment.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for Node.js.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **MongoDB**: NoSQL database for storing user data.
- **Docker**: Containerization platform for packaging the application.
- **Docker Compose**: Tool for defining and running multi-container Docker applications.

## Setup and Installation

### Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine.
- [Docker Compose](https://docs.docker.com/compose/install/) installed (usually included with Docker Desktop).

### Building and Running the Application

1. **Clone the Repository**:
   ```bash
   git clone git@github.com:pavankreddy48/Centivo-Assignment.git
   cd git@github.com:pavankreddy48/Centivo-Assignment.git
2. **Create a .env File (optional)**: 
   
   If you want to customize environment variables, create a .env file in the root directory. You can define variables like MONGODB_URI and PORT.
3. **Start the Application**:
    ```bash
   docker-compose up --build or
   docker compose up --build
4. **Access the Application**:
   - The Node.js application will be available at 
        ```bash
     http://localhost:3000
   - Mongo Express (a web-based MongoDB admin interface) will be available at
        ```bash
     http://localhost:8081
5. **Stopping the Application**:
   ```bash
   docker-compose down or
   docker compose down

### API Endpoints
- GET /users/:id: Retrieve a user by their ID.

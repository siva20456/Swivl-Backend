### Swivl - BackEnd

This Node.js backend project provides user registration, login functionality, data CRUD oprations , and authentication using JWT. It also includes Swagger documentation for better understanding and usability.

#### Prerequisites

- Node.js installed on your machine
- MongoDB Atlas account or a local MongoDB instance

#### Installation

1. Clone the repository:
   git clone https://github.com/siva20456/Swivl-Backend/

2. Install dependencies:
   ```
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the project root directory.
   - Define the following environment variables:
     - `MONGODB_URI`: Connection URI for MongoDB database. = 'mongodb+srv://siva2002ismart2002:TXdw46JZStGypQSM@cluster0.bmdcdp3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
     - `PORT`: PORT default 3005
     - `SECRET` : 'SECRET'

#### Usage

1. Start the server:
   ```
    node app.js
   ```

2. The server will start running on port 3005 by default.

#### Endpoints

- **POST users/Register**: Register a new user with username, email, and password.
- **POST users/login**: Authenticate user login with username and password.
- **GET diary/get**: Fetch data of travel entries
- **POST diary/create**: Insert new entry
- **PUT diary/update**: Update existing entry
- **DELETE diary/delete**: Delete existing entry

#### OOPs Concepts 

- **Abstraction**: Using .env for storing sensitive data
- **Re-Usability**: Re-using certain functions like getting user & entry details
- **Encapsulation**: Binding the functions and it's code in MVC Arch
  
#### Swagger Documentation
![image](https://github.com/siva20456/Swivl-Backend/assets/85632492/c7e43834-535c-426f-b3bc-7859a55eedb3)


- Access Swagger UI at `/docs` endpoint for interactive API documentation.

#### Note

- Make sure to set up proper environment variables before starting the server. LIKE THE PORT = 3005 AND MONGO_URL = "mongodb+srv://siva2002ismart2002:1gcor0WfxhJjryWA@cluster0.jqbkgks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" AND SECRET = SECRET
- Replace placeholders like (https://github.com/siva20456/Swivl-Backend) with actual values.

#### Author

- Marella Siva Shankar

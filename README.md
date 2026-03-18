# 🚀 Smart User Management System

A comprehensive full-stack web application for managing users with a modern, responsive interface and robust REST API backend.

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [Using the Application](#using-the-application)
- [API Documentation](#api-documentation)
- [Database Management](#database-management)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## 🎯 About the Project

The Smart User Management System is a production-ready application that demonstrates modern web development practices. It provides a complete solution for user management with a clean, intuitive interface and powerful backend capabilities.

### What Makes This Project Special

- **Full-Stack Architecture**: Complete separation of concerns with frontend and backend
- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Real-Time Updates**: Live statistics and instant data synchronization
- **RESTful API**: Well-designed API endpoints following REST principles
- **Database Integration**: Seamless database operations with JPA/Hibernate
- **Production Ready**: Clean code, proper error handling, and comprehensive features

## ✨ Features

### 🎨 Frontend Features
- **Modern User Interface**: Clean, professional design with gradient backgrounds
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Real-Time Statistics**: Live dashboard showing user counts and metrics
- **Advanced Filtering**: Filter users by status, role, and other criteria
- **Interactive Tables**: Sort, edit, and delete users with intuitive controls
- **Modal Forms**: Elegant pop-up forms for editing user information
- **Toast Notifications**: Non-intrusive feedback for all user actions
- **API Testing Console**: Built-in tool for testing API endpoints
- **Form Validation**: Client-side validation with helpful error messages

### ⚙️ Backend Features
- **RESTful API**: Complete CRUD operations with proper HTTP methods
- **Data Validation**: Server-side validation and error handling
- **Database Integration**: JPA/Hibernate for seamless database operations
- **H2 Database**: In-memory database for easy development and testing
- **Spring Boot**: Enterprise-grade framework for robust backend
- **JSON API**: Clean JSON responses for all API endpoints
- **Error Handling**: Comprehensive error handling with meaningful messages

### 🔧 Technical Features
- **Layered Architecture**: Clean separation of model, repository, service, and controller layers
- **Dependency Injection**: Spring's IoC container for managing dependencies
- **Database Console**: Built-in H2 console for database management
- **Hot Reload**: Development-friendly with automatic reloading
- **Logging**: Comprehensive logging for debugging and monitoring

## 🛠️ Tech Stack

### Backend
- **Java 17+**: Modern Java with latest features
- **Spring Boot 3.2.5**: Enterprise application framework
- **Spring Data JPA**: Database abstraction layer
- **Spring Web**: REST API framework
- **H2 Database**: In-memory database for development
- **Maven**: Build and dependency management
- **Tomcat**: Embedded web server

### Frontend
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with animations and transitions
- **JavaScript ES6+**: Modern JavaScript with async/await
- **Font Awesome**: Professional icons and UI elements
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox

### Development Tools
- **Maven Wrapper**: Easy dependency management
- **H2 Console**: Database management interface
- **REST API**: Standard HTTP methods and status codes

## 📁 Project Structure

```
Smart User Management System/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── pranat/
│   │   │           └── usermanagement/
│   │   │               ├── UsermanagementApplication.java  # Main application class
│   │   │               ├── controller/
│   │   │               │   └── UserController.java         # REST API endpoints
│   │   │               ├── service/
│   │   │               │   └── UserService.java            # Business logic
│   │   │               ├── repository/
│   │   │               │   └── UserRepository.java         # Database operations
│   │   │               └── model/
│   │   │                   └── User.java                    # Entity model
│   │   └── resources/
│   │       ├── static/
│   │       │   ├── index.html                              # Main frontend page
│   │       │   ├── style.css                               # Styling and animations
│   │       │   └── script.js                               # Frontend logic
│   │       └── application.properties                       # Configuration
├── pom.xml                                                 # Maven configuration
├── README.md                                               # Project documentation
├── download-maven-and-run.bat                              # Startup script
└── start-app.bat                                          # Setup instructions
```

## 🔄 How It Works

### Architecture Overview

1. **Frontend (Browser)**: User interacts with the web interface
2. **REST API**: Frontend communicates with backend via HTTP requests
3. **Service Layer**: Business logic and data processing
4. **Repository Layer**: Database operations and data persistence
5. **Database**: H2 in-memory database storing user data

### Data Flow

1. **User Action**: User performs an action (add, edit, delete user)
2. **HTTP Request**: Frontend sends request to appropriate API endpoint
3. **Controller**: Receives request and validates input
4. **Service**: Processes business logic and calls repository
5. **Repository**: Executes database operations
6. **Response**: Data flows back through layers to frontend
7. **UI Update**: Frontend updates interface with new data

### Key Components

- **User Entity**: JPA entity representing user data
- **UserRepository**: Spring Data repository for database operations
- **UserService**: Service layer with business logic
- **UserController**: REST endpoints for API access
- **Frontend Components**: Interactive UI with real-time updates

## 🚀 Installation & Setup

### Prerequisites

- **Java 17+**: Ensure Java Development Kit is installed
- **Maven**: For building and running the application
- **Modern Browser**: Chrome, Firefox, Safari, or Edge

### Quick Start

1. **Clone or Download** the project to your local machine
2. **Navigate** to the project directory
3. **Run** the application using one of the methods below

### Installation Methods

#### Method 1: Automatic Maven Download (Recommended)
```bash
.\download-maven-and-run.bat
```
This script automatically downloads Maven and starts the application.

#### Method 2: Using Installed Maven
```bash
mvn spring-boot:run
```

#### Method 3: Using IDE
- Open the project in IntelliJ IDEA or Eclipse
- Run the `UsermanagementApplication` main class

#### Method 4: Using VS Code
- Install the Java Extension Pack
- Open the project folder
- Run the main class using the Java runner

## ▶️ Running the Application

### Start the Server

1. **Open** a terminal/command prompt
2. **Navigate** to the project directory
3. **Execute** one of the startup commands:
   ```bash
   # Automatic Maven download
   .\download-maven-and-run.bat
   
   # Or with installed Maven
   mvn spring-boot:run
   ```

4. **Wait** for the server to start (you'll see "Tomcat started on port 8080")

### Access the Application

- **Main Application**: http://localhost:8080
- **H2 Database Console**: http://localhost:8080/h2-console
- **API Base URL**: http://localhost:8080/users

### Server Status

When the application starts successfully, you'll see:
```
Tomcat started on port 8080 (http) with context path ''
Started UsermanagementApplication in X.XXX seconds
```

## 📖 Using the Application

### Main Interface

The application provides a comprehensive user management interface with several key sections:

#### 1. Add New User
- **Form Fields**: Name, Email, Role, Status
- **Validation**: Real-time form validation
- **Actions**: Add User button and Clear Form button

#### 2. User Statistics
- **Live Counts**: Total, Active, Admin, Inactive users
- **Real-Time Updates**: Statistics update automatically
- **Visual Indicators**: Color-coded statistics cards

#### 3. User Filtering
- **Filter Options**: All, Active Only, Inactive Only, Admin Only
- **Instant Results**: Immediate filtering of user list
- **Visual Feedback**: Active filter highlighting

#### 4. Users Table
- **Complete Information**: ID, Name, Email, Role, Status
- **Action Buttons**: Edit and Delete for each user
- **Status Badges**: Color-coded role and status indicators

#### 5. API Testing Console
- **Endpoint Selection**: Dropdown for all API methods
- **Request Builder**: JSON request body editor
- **Response Viewer**: Formatted API responses

### User Operations

#### Adding a User
1. **Fill** the form with user details
2. **Select** appropriate role and status
3. **Click** "Add User" button
4. **Success**: User appears in the table immediately

#### Editing a User
1. **Click** the "Edit" button in the users table
2. **Modify** user details in the modal form
3. **Click** "Update User" button
4. **Success**: Changes reflect immediately

#### Deleting a User
1. **Click** the "Delete" button in the users table
2. **Confirm** the deletion in the dialog
3. **Success**: User removed from table and database

#### Filtering Users
1. **Click** any filter button (All, Active, Inactive, Admin)
2. **View** filtered results in the table
3. **Switch** between filters seamlessly

## 🔌 API Documentation

### Base URL
```
http://localhost:8080/users
```

### Endpoints

#### Get All Users
```http
GET /users
```
**Response**: Array of all user objects

#### Get Active Users
```http
GET /users/active
```
**Response**: Array of active user objects

#### Create User
```http
POST /users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "role": "admin",
  "status": "active"
}
```
**Response**: Created user object with ID

#### Update User
```http
PUT /users/{id}
Content-Type: application/json

{
  "name": "John Updated",
  "email": "john.updated@example.com",
  "role": "manager",
  "status": "active"
}
```
**Response**: Updated user object

#### Delete User
```http
DELETE /users/{id}
```
**Response**: "User deleted successfully"

### Response Format

All responses return JSON with proper HTTP status codes:
- **200 OK**: Successful GET/PUT operations
- **201 Created**: Successful POST operations
- **204 No Content**: Successful DELETE operations
- **400 Bad Request**: Invalid input data
- **404 Not Found**: Resource not found
- **500 Internal Server Error**: Server errors

### User Object Structure

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "role": "admin",
  "status": "active"
}
```

## 🗄️ Database Management

### H2 Database Console

The application includes an H2 database console for direct database access:

#### Access Information
- **URL**: http://localhost:8080/h2-console
- **JDBC URL**: `jdbc:h2:mem:userdb`
- **Username**: `sa`
- **Password**: (leave blank)

#### Common Queries

```sql
-- View all users
SELECT * FROM users;

-- Count users by status
SELECT status, COUNT(*) FROM users GROUP BY status;

-- Find users by role
SELECT * FROM users WHERE role = 'admin';

-- Add user manually
INSERT INTO users (name, email, role, status) 
VALUES ('Test User', 'test@example.com', 'user', 'active');

-- Update user
UPDATE users SET status = 'inactive' WHERE id = 1;

-- Delete user
DELETE FROM users WHERE id = 1;
```

### Database Schema

The `users` table contains:
- **id**: Auto-increment primary key
- **name**: User's full name (NOT NULL)
- **email**: User's email address (NOT NULL, UNIQUE)
- **role**: User's role (NOT NULL)
- **status**: User's status (NOT NULL)

## 🧪 Testing

### Frontend Testing

#### Manual Testing Checklist
- [ ] Add new user with valid data
- [ ] Add user with invalid email (should show error)
- [ ] Add user with missing fields (should show error)
- [ ] Edit existing user
- [ ] Delete user with confirmation
- [ ] Filter users by different criteria
- [ ] Test statistics updates
- [ ] Test responsive design on mobile
- [ ] Test API console functionality

#### API Testing

Using the built-in API console or tools like Postman:

```bash
# Test all endpoints
curl -X GET http://localhost:8080/users
curl -X GET http://localhost:8080/users/active
curl -X POST -H "Content-Type: application/json" -d '{"name":"Test","email":"test@example.com","role":"user","status":"active"}' http://localhost:8080/users
curl -X PUT -H "Content-Type: application/json" -d '{"name":"Updated","email":"updated@example.com","role":"admin","status":"active"}' http://localhost:8080/users/1
curl -X DELETE http://localhost:8080/users/1
```

### Database Testing

1. **Open** H2 console at http://localhost:8080/h2-console
2. **Login** with the provided credentials
3. **Execute** SQL queries to verify data
4. **Test** database constraints and relationships

## 🤝 Contributing

### Development Guidelines

1. **Code Style**: Follow Java and JavaScript best practices
2. **Commit Messages**: Use clear, descriptive commit messages
3. **Testing**: Test all changes before submitting
4. **Documentation**: Update documentation for new features

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Commit** your changes
6. **Push** to your fork
7. **Create** a pull request

### Bug Reports

When reporting bugs, please include:
- **Description**: Clear description of the issue
- **Steps to Reproduce**: Detailed steps to reproduce the bug
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Environment**: Browser, OS, and version information

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Spring Boot Team**: For the excellent framework
- **H2 Database**: For the lightweight database solution
- **Font Awesome**: For the beautiful icons
- **Web Development Community**: For inspiration and best practices

## 📞 Support

If you have any questions or need help:

1. **Check** the documentation above
2. **Review** the API documentation
3. **Test** with the H2 console
4. **Create** an issue for bugs or feature requests

---

**Built with ❤️ using Spring Boot and modern web technologies**

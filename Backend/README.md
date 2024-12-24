# User Registration Endpoint

## POST /users/register

### Description
This endpoint allows a new user to register by providing their first name, last name, email, and password.

### Request Body
The request body must be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname` (string, required): The user's first name. Must be at least 3 characters long.
  - `lastname` (string, optional): The user's last name. Must be at least 3 characters long if provided.
- `email` (string, required): The user's email address. Must be a valid email format.
- `password` (string, required): The user's password. Must be at least 6 characters long.

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: `201 Created`
- **Body**:
  ```json
  {
    "token": "jwt_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors
- **Status Code**: `400 Bad Request`
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First name must be 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### Server Errors
- **Status Code**: `500 Internal Server Error`
- **Body**:
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

# User Login Endpoint

## POST /users/login

### Description
This endpoint allows an existing user to log in by providing their email and password.

### Request Body
The request body must be a JSON object containing the following fields:
- `email` (string, required): The user's email address. Must be a valid email format.
- `password` (string, required): The user's password. Must be at least 6 characters long.

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "token": "jwt_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors
- **Status Code**: `400 Bad Request`
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### Authentication Errors
- **Status Code**: `401 Unauthorized`
- **Body**:
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

#### Server Errors
- **Status Code**: `500 Internal Server Error`
- **Body**:
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

# User Profile Endpoint

## GET /users/profile

### Description
This endpoint allows an authenticated user to retrieve their profile information.

### Headers
- `Authorization` (string, required): The JWT token for authentication.

### Responses

#### Success
- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
  ```

#### Authentication Errors
- **Status Code**: `401 Unauthorized`
- **Body**:
  ```json
  {
    "message": "Authentication required"
  }
  ```

#### Server Errors
- **Status Code**: `500 Internal Server Error`
- **Body**:
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

# User Logout Endpoint

## GET /users/logout

### Description
This endpoint allows an authenticated user to log out.

### Headers
- `Authorization` (string, required): The JWT token for authentication.

### Responses

#### Success
- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### Authentication Errors
- **Status Code**: `401 Unauthorized`
- **Body**:
  ```json
  {
    "message": "Authentication required"
  }
  ```

#### Server Errors
- **Status Code**: `500 Internal Server Error`
- **Body**:
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

# Captain Registration Endpoint

## POST /captains/register

### Description
This endpoint allows a new captain to register by providing their first name, last name, email, password, and vehicle details.

### Request Body
The request body must be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname` (string, required): The captain's first name. Must be at least 3 characters long.
  - `lastname` (string, optional): The captain's last name. Must be at least 3 characters long if provided.
- `email` (string, required): The captain's email address. Must be a valid email format.
- `password` (string, required): The captain's password. Must be at least 6 characters long.
- `vehicle`: An object containing:
  - `color` (string, required): The vehicle's color. Must be at least 3 characters long.
  - `plate` (string, required): The vehicle's plate number. Must be at least 3 characters long.
  - `capacity` (number, required): The vehicle's capacity. Must be a number.
  - `vehicleType` (string, required): The type of vehicle. Must be one of "car", "motorcycle", or "auto".

Example:
```json
{
  "fullname": {
    "firstname": "John", // must be at least 3 characters long
    "lastname": "Doe" // optional, must be at least 3 characters long if provided
  },
  "email": "john.doe@example.com", // must be a valid email format
  "password": "password123", // must be at least 6 characters long
  "vehicle": {
    "color": "red", // must be at least 3 characters long
    "plate": "ABC123", // must be at least 3 characters long
    "capacity": 4, // must be a number
    "vehicleType": "car" // must be one of "car", "motorcycle", or "auto"
  }
}
```

### Responses

#### Success
- **Status Code**: `201 Created`
- **Body**:
  ```json
  {
    "token": "jwt_token",
    "captain": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

#### Validation Errors
- **Status Code**: `400 Bad Request`
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First name must be 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      },
      {
        "msg": "Color must be at least 3 characters long",
        "param": "vehicle.color",
        "location": "body"
      },
      {
        "msg": "Plate must be at least 3 characters long",
        "param": "vehicle.plate",
        "location": "body"
      },
      {
        "msg": "Capacity must be a number",
        "param": "vehicle.capacity",
        "location": "body"
      },
      {
        "msg": "Invalid vehicle type",
        "param": "vehicle.vehicleType",
        "location": "body"
      }
    ]
  }
  ```

#### Server Errors
- **Status Code**: `500 Internal Server Error`
- **Body**:
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

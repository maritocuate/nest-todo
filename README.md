# NestJS Todo App

A simple and efficient Todo API built with NestJS, TypeScript, and MongoDB (using Mongoose), designed to manage tasks with ease.

## Features

- **CRUD Operations**: Create, read, update, and delete tasks.
- **MongoDB Integration**: Data persistence using MongoDB Atlas.
- **Modular Architecture**: Organized codebase following NestJS best practices.

## Tech Stack

- **Framework**: [NestJS](https://nestjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-directory>
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a .env file in the root directory and add your MongoDB connection string.

```bash
MONGODB_URI=<your-mongodb-connection-string>
```

4. Run the application:

```bash
npm run start:dev
```

## API Endpoints

### Create a New Task

- **Endpoint:** `POST /tasks`
- **Description:** Creates a new task with the provided details.
- **Request Body:**
  ```json
  {
    "title": "Task title",
    "type": "Task type",
    "completed": false
  }
  ```
- **Response:** Returns the created task object.

## Project Structure

```
src/
├── tasks/
│   ├── dto/
│   │   ├── create-task.dto.ts
│   │   └── update-task.dto.ts
│   ├── entities/
│   │   └── task.entity.ts
│   ├── tasks.controller.ts
│   ├── tasks.module.ts
│   └── tasks.service.ts
├── app.module.ts
└── main.ts
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Assignment Requirements Document

## Project: Library Management System APIs

### Objective:
Build a RESTful API to manage key operations in a library management system. Ensure the API supports fundamental CRUD (Create, Read, Update, Delete) operations for core entities: Books, Members, Borrowings, and Authors.

### Technology Stack:
- Framework: Any backend language/framework of your choice
- Database: PostgreSQL/MySQL/SQLite (Relational Database)

### Core API Endpoints:

#### 1. Books Management
- `POST /api/books`
  - Add a new book.
- `GET /api/books`
  - List all books.
- `GET /api/books/{bookId}`
  - Retrieve details of a specific book.
- `PUT /api/books/{bookId}`
  - Update a book’s details.
- `DELETE /api/books/{bookId}`
  - Remove a book from the library.

#### 2. Members Management
- `POST /api/members`
  - Register a new member.
- `GET /api/members`
  - List all members.
- `GET /api/members/{memberId}`
  - Retrieve details of a specific member.
- `PUT /api/members/{memberId}`
  - Update member details.
- `DELETE /api/members/{memberId}`
  - Delete a member from the system.

#### 3. Borrowings Management
- `POST /api/borrowings`
  - Record the borrowing of a book.
- `GET /api/borrowings`
  - List all borrowings (with filtering options by member or book).
- `GET /api/borrowings/{borrowingId}`
  - Retrieve details of a specific borrowing entry.
- `PUT /api/borrowings/{borrowingId}/return`
  - Record the return of a borrowed book.

#### 4. Authors Management
- `POST /api/authors`
  - Add a new author.
- `GET /api/authors`
  - List all authors.
- `GET /api/authors/{authorId}`
  - Retrieve details of a specific author.
- `PUT /api/authors/{authorId}`
  - Update an author’s details.
- `DELETE /api/authors/{authorId}`
  - Remove an author from the system.

### Additional Requirements:
- API should follow REST standards.
- Clear and meaningful HTTP status codes.
- Proper error handling and validation.
- Database schema must be well-defined and normalized.

### Deliverables:
- Fully functional API endpoints.
- Database schema scripts.
- README.md with setup instructions and examples.

### Evaluation Criteria:
- API completeness and correctness.
- Code quality (clarity, maintainability).
- Database schema design.
- Documentation clarity and usability.


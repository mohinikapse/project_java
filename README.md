NAME:MOHINI KAPSE 

MANISHA GAIKWAD

SANIYA PATHAN

DIVYA GAIKWAD

SONAM NAVGHARE

🎓 Student Record Management System 

✅ 1. Project Overview

This project is a full-stack web application that demonstrates the integration between
a Spring Boot RESTful backend and a responsive frontend built using HTML, CSS, and JavaScript.
It manages student data using PostgreSQL as the database and follows the MVC (Model-View-Controller) architecture.

✅ 2. Objective
To build a responsive and interactive web application where users can:
Add new students
View all students
Delete a student
All operations are performed via REST APIs and updated in the database in real time.

✅ 3. Architecture: MVC (Model-View-Controller)
Model: Represents the data (Student entity) and database interaction via JPA.
View: Frontend built with HTML, CSS, and JavaScript (acts as the user interface).
Controller: Handles HTTP requests, connects frontend with backend logic.

✅ 4. Technologies Used
Layer	Technology
Frontend	HTML, CSS, JavaScript (Fetch API)
Backend	Spring Boot (REST API), JPA
Database	PostgreSQL
Architecture	MVC (Model-View-Controller)
Tools	IntelliJ or Eclipse, Postman, pgAdmin, Live Server

✅ 5. Working of the Project
🔹 Frontend (View Layer)
A clean, mobile-responsive HTML form allows the user to enter student name and email.
Data is sent to the backend using JavaScript's fetch() API.
The list of students is fetched and displayed using dynamic DOM manipulation.
🔹 Backend (Controller + Business Layer)
The Spring Boot app exposes APIs like:
GET /api/students – fetch all students

POST /api/students – add a new student

DELETE /api/students/{id} – delete a student


The controller calls the Service layer, which contains business logic and uses the Repository layer to interact with PostgreSQL.


🔹 Database (Model Layer)

A PostgreSQL database contains a student table with fields:

id (primary key)

name

email


Spring JPA automatically maps the Student Java class to the table and performs CRUD operations.


✅ 6. Integration Flow

1. User fills form → frontend sends POST request to Spring Boot.


2. Spring Boot saves student → JPA saves to PostgreSQL.


3. Frontend fetches list → backend returns JSON → rendered dynamically on page.


4. Delete button clicked → DELETE request sent → backend deletes → list refreshed.



✅ 7. Features

📬 RESTful APIs for student CRUD

🎨 Responsive UI with form and list

📦 Real-time sync with PostgreSQL

🔄 Full integration: frontend ⇆ backend ⇆ DB

🧱 MVC pattern for clean code organization

✅ 8. Advantages

Full-stack exposure for students/new developers

Clear separation of concerns (MVC)

Demonstrates real-world REST API usage

Easy to extend (e.g., add Update functionality, validations)

✅ 9. Disadvantages / Limitations

No login/authentication (public access)

No client-side validation or error handling

No pagination or sorting for large data sets

Limited to basic CRUD functionality

✅ 10. Scope for Improvement

Add Update/Edit functionality

Integrate form validation

Use Bootstrap or Tailwind CSS for better UI

Add authentication system (JWT / Spring Security)

Deploy backend with frontend on platforms like Render, Netlify, or Vercel

~OUT PUT

<img width="1234" height="927" alt="image" src="https://github.com/user-attachments/assets/99b5e265-a1fd-4731-955f-ad30ffadb447" />


Would you like this theory in a downloadable PDF or Word format?

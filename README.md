NAME:MOHINI KAPSE 

MANISHA GAIKWAD

SANIYA PATHAN

DIVYA GAIKWAD

📘 Project Title:

Student Course Management System (Console-Based)

Technologies: Java, Maven, JPA, Hibernate, PostgreSQL

🎯 Objective:

To develop a menu-driven console application that allows students to be added, courses to be created, and students to be enrolled in courses using Object-Oriented Programming principles and JPA/Hibernate for database operations.

🛠 Technologies Used:

Technology	Description

Java	Base language for building the application

Maven	Build tool for managing dependencies and project lifecycle

JPA (Java Persistence API)	Interface-based ORM standard for mapping Java objects to relational data

Hibernate	Implementation of JPA for database operations

PostgreSQL	Relational database to store students, courses, and enrollments


📁 Project Structure (Maven)

student-course-management/

│

├── src/main/java/

│   ├── model/

│   │   ├── Student.java

│   │   └── Course.java

│   │

│   ├── dao/

│   │   ├── StudentDAO.java

│   │   └── CourseDAO.java

│   │

│   ├── util/

│   │   └── JPAUtil.java

│   │

│   └── MainApp.java

│

├── src/main/resources/

│   └── META-INF/persistence.xml

│

├── pom.xml


📄 Project Description:

The Student Course Management System enables:

Adding and listing students

Creating and listing courses

Enrolling students into courses

Viewing course-student relationships


This project uses JPA annotations like @Entity, @ManyToMany, and @Id to define and manage entity relationships in the database. It stores data persistently using Hibernate and PostgreSQL.

📦 Advantages:

✅ Easy database handling using JPA/Hibernate

✅ Clean code architecture (MVC-like)

✅ Scalable and easily extendable

✅ Reduces boilerplate SQL code

✅ Demonstrates real-world object mapping and relationships

⚠ Limitations:

⚠ No GUI, only console-based

⚠ No authentication or user roles

⚠ Basic validation (can be enhanced)

⚠ Not suitable for production without improvement in exception handling, logging, and transactions

🚀 Future Improvements:

Add GUI (JavaFX, Swing, or web UI)

Add login system with student/teacher roles

Generate reports (PDF/CSV)

REST API using Spring Boot



OUTPUT:


<img width="520" height="473" alt="Screenshot 2025-07-15 192106" src="https://github.com/user-attachments/assets/e5040376-df02-4c0c-bb92-3e110f58fb82" />








CONTACT ME:

NAME:MOHINI MILIND KAPSE

GMAIL:mohinikapse02@gmail.com

GITHUB:mohinikapse

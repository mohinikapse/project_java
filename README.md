TEAM MEMBERS:

NAME:MOHINI KAPSE 

MANISHA GAIKWAD

SANIYA PATHAN

DIVYA GAIKWAD

📘 Currency Converter

✅ 1. Project Purpose

A Currency Converter Application allows users to convert a specified amount from one currency to another using pre-defined or real-time exchange rates. The application is designed as a menu-driven console application using:

Java (OOP)

JDBC (PostgreSQL)

Multithreading

Maven (Project management and build tool)

✅ 2. Key Objectives

Convert one currency to another with proper exchange rate.

Log each conversion into a PostgreSQL database.

Allow the user to view past conversions (history).

Use multithreading to log conversions asynchronously.

Maintain a modular, organized structure using OOP principles.

✅ 3. Technologies Used

Component	Technology

Language	Java
Build Tool	Maven
Database	PostgreSQL
JDBC Driver	PostgreSQL JDBC (postgresql-42.x.x.jar)
Multithreading	Java Threads
Architecture	Object-Oriented Programming
✅ 4. Maven Project Structure

Maven helps manage dependencies and structure:

CurrencyConverterApp/
├── src/main/java/
│   └── com/currencyconverter/
│       ├── model/
│       ├── service/
│       ├── util/
│       ├── thread/
│       └── Main.java
├── src/main/resources/
├── pom.xml

pom.xml – Manages PostgreSQL JDBC dependency and build lifecycle.

model – Contains Conversion class (POJO).

service – Contains logic for converting currency and handling database operations.

util – Manages database connection and rate provider.

thread – Implements a thread for background logging.

Main – Menu-driven user interface for the console.

✅ 5. Key Features

📌 Currency Conversion

User inputs source currency, target currency, and amount.

System fetches exchange rate and computes the result.


📌 Database Logging (JDBC + PostgreSQL)

Every conversion is inserted into conversion_history table.


📌 Multithreaded Logging

Background thread logs each conversion for performance and better UX.


📌 History Viewer

Menu option to view all past conversions from the database.

✅ 6. Advantages

Feature	Benefit
Maven	Manages dependencies, builds, and execution
JDBC with PostgreSQL	Persistent storage of conversion history
Multithreading	Async logging improves performance
OOP Structure	Clean, modular, and maintainable code
Menu-driven UI	Simple, user-friendly console interface

✅ 7. Disadvantages

Limitation	Impact
No real-time exchange rates	Needs manual updates or API integration
Console-based	Not suitable for modern GUI/UX
Basic validation	Limited error checking

CONTACT ME:

NAME:MOHINI MILIND KAPSE

GMAIL:mohinikapse02@gmail.com

GITHUB:mohinikapse

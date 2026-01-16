# `Class Test Planner`

A minimal, end-to-end full-stack application demonstrating **System Integration** for the **CSE-216 | Database** course at **BUET**. This project serves as a basic template for understanding 3-tier architecture.

## Tech Stack

- **Database:** Oracle Database 
- **Backend:** Node.js, Express.js 
- **Frontend:** Next.js, Tailwind CSS

---

## How to Run Locally

Follow these steps to set up the project on your machine.

### 1. Clone the Repository
Open your terminal and run:
```bash
git clone https://github.com/BRAINIAC2677/class-test-planner.git
cd class-test-planner
```

### 2. Database Setup (Oracle)

You need a running Oracle Database instance (local or remote). You can work through graphical tools (like SQL Developer, Navicat) or the terminal.

#### Step-by-Step Instructions

1. **Create a New User for the Project**
    Open your terminal/SQL tool and connect as an admin (e.g., `SYS` or `SYSTEM`).
    Run the following to create a user and grant permissions:

    ```sql
    CREATE USER class_test_planner_db IDENTIFIED BY your_password;
    GRANT CONNECT, RESOURCE TO class_test_planner_db;
    ALTER USER class_test_planner_db QUOTA UNLIMITED ON USERS;
    ```

2. **Connect as the New User**
    Connect using the new credentials:

    ```bash
    # In SQL*Plus:
    sqlplus class_test_planner_db/your_password@localhost:1521/ORCLPDB1
    ```

3. **Run the Schema Script**
    Creates tables (`STUDENTS`, `COURSES`, `CLASS_TESTS`) and triggers.

    ```bash
    # From project root:
    @database/schema.sql
    ```

4. **Run the Seed Script**
    Inserts sample data.

    ```bash
    @database/seed.sql
    ```

### 3. Backend Setup
1.  Navigate to the backend folder:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Configure Environment Variables:
    - Rename `.env.example` to `.env`.
    - Open `.env` and fill in your Oracle DB credentials.
4.  Start the Server:
    ```bash
    node server.js
    ```

### 4. Frontend Setup
1.  Open a **new terminal** and navigate to the frontend folder:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Configure Environment Variables:
    - Rename `.env.example` to `.env`.
4.  Start the App:
    ```bash
    npm run dev
    ```
5.  Open [http://localhost:3000](http://localhost:3000) in your browser.

---

---
## How to Learn from this Project

This project is designed for you to explore things and play around.

1.  **Explore:** Read the code to understand the Frontend-Backend-Database connection.
2.  **Tweak:** Try editing the code. Change the code and see things are working as you want it to just to strengthen your understanding and learning. 

---

## 🤝 Your First Open Source Contribution | `Absolutely Optional`

In the industry, we don't just write code; we review it, improve it, and merge it together. This repository is a safe sandbox for you to make your **first-ever Open Source contribution**.

**Why do this?**
- You'll learn the real-world GitHub workflow used at companies like Google, Meta, and Netflix.
- You'll get used to explaining your code changes.
- **I will try to review your PRs.** If it works and improves the project, I'll merge it.

**How to Start:**
Check out this guide: [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)

**Basic Workflow:**
1.  **Fork** this repository.
2.  **Clone** your fork.
3.  **Create a Branch** (e.g., `git checkout -b feature/better-colors`).
4.  **Make a Change** (add a feature, fix a typo, improve the UI).
5.  **Push** your branch and open a **Pull Request (PR)**.

---

> "The best way to learn is by doing." 💪
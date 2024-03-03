# Project Management System

This README provides an overview of the project management system, including setup instructions, features, and usage guidelines.

## Overview

The project management system is designed to facilitate project management by allowing users to create projects, manage project details, and track issues related to each project. It provides a user-friendly interface for creating projects, adding issues, and filtering/searching for specific information.

## System Requirements

- Node.js (version 14 or later)
- npm (Node Package Manager)
- A modern web browser

## Setup Instructions

Follow these steps to set up and run the project management system on your local machine:

1. **Clone the Repository**: Clone the project repository to your local machine using the following command:

    ```
    git clone <repository-url>
    ```

2. **Navigate to the Project Directory**: Change directory to the project folder:

    ```
    cd project-management-system
    ```

3. **Install Dependencies**: Install the project dependencies by running:

    ```
    npm install
    ```

4. **Start the Server**: Start the local server by running:

    ```
    npm start
    ```

5. **Access the Application**: Open a web browser and go to `http://localhost:3000` to access the application.

## Features and Usage

### Home Page

- Shows a list of projects.
- Provides a button to create a new project.
- Clicking on a project redirects the user to the project detail page.

### Create Project Page

- Accepts the following fields to create a project:
  - Name
  - Description
  - Author

### Project Detail Page

- Shows bugs related to the selected project.
- User can:
  - Filter bugs by multiple labels simultaneously.
  - Filter bugs by author.
  - Search by title and description.
  - Create a new issue.

### Create Issue Page

- Allows users to create an issue for a project.
- Accepts the following fields:
  - Title
  - Description
  - Labels (multiple labels can be added to a project; existing labels are shown in dropdown as the user types)

## Conclusion

This README provides a comprehensive guide to setting up and using the project management system. By following the setup instructions and exploring the features and usage guidelines, users can effectively manage projects, track issues, and collaborate on project-related tasks with ease.

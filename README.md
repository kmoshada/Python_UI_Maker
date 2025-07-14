# User Manual: App Builder Framework

## 1. Overview

Welcome to the App Builder Framework!

This project is a foundational framework for a web-based, visual application builder. It is designed to be extended and built upon. In its current state, it consists of a Python/FastAPI backend and a React frontend, containerized with Docker.

The primary feature is the ability to take a JSON-based description of UI components and generate a runnable Python script for a Kivy mobile application.

**Core Technologies:**
- **Backend:** Python 3.9, FastAPI
- **Frontend:** React, Axios
- **Code Generation:** Jinja2
- **Containerization:** Docker

---

## 2. Prerequisites

Before you can run the application, you **must** have the following software installed on your system:

- **Docker:** The application is designed to run in containers. You need a working installation of Docker.
- **Docker Compose:** This tool is used to orchestrate the multi-container application. (Note: Newer versions of Docker integrate `compose` as a subcommand: `docker compose`).

---

## 3. How to Run the Application

Follow these steps to get the application running:

1.  **Navigate to the Project Directory:**
    Open a terminal and change into the root directory of the project.
    ```bash
    cd /home/km/development/Fram/app-builder-framework
    ```

2.  **Build and Start the Containers:**
    Run the following command. This will build the Docker images for both the frontend and backend services and start them.
    ```bash
    docker compose up --build
    ```
    The first time you run this, it may take a few minutes to download the necessary base images and install all the dependencies.

3.  **Access the Application:**
    Once the services are running, you can access the web interface by opening your browser and navigating to:
    [**http://localhost:3000**](http://localhost:3000)

---

## 4. How to Use the Application

The user interface is currently very simple and demonstrates the core code-generation functionality.

### Frontend Interface

When you open the application in your browser, you will see:

- **An "Export as Kivy" button:** This is the main interactive element.
- **A "Generated Code" section:** This area is initially empty.

### Walkthrough: Exporting a Kivy App

1.  **Click the "Export as Kivy" button.**
2.  The frontend will send a request to the backend to generate a Kivy application.
3.  The backend will process the request and return the generated Python code.
4.  The frontend will then display this code in the "Generated Code" section.

---

## 5. Current Features & Limitations

It is important to understand what the application can and cannot do in its current state.

### Features:

- **Backend Service:** A running FastAPI server that can be accessed at `http://localhost:8000`.
- **Code Generation:** The backend can generate a basic Kivy app layout from a predefined template.
- **Project Storage (Demo):** The backend has `/save` and `/load` endpoints that store project data in memory. **Note: This data will be lost if the backend service is restarted.**
- **Web UI:** A simple React frontend to interact with the export feature.

### Limitations:

- **No Visual Editor:** There is currently **no drag-and-drop canvas** or visual editor.
- **No Component Library:** There is **no way to add, remove, or edit UI components** (like buttons or text fields) from the frontend. The application is hardcoded to export an empty layout.
- **Static Code Generation:** The Kivy code is generated from a fixed template. The structure of the generated app does not change.
- **No AI Functionality:** The AI-powered code generation has been removed.

---

## 6. For Developers: Next Steps

This framework is intended to be a starting point. The most logical next steps to make the application more useful are:

1.  **Implement a Component Toolbox:** Add UI elements to the frontend that allow a user to select components (e.g., "Add Button", "Add Text Input").
2.  **Build the Visual Canvas:** Use a library like `@dnd-kit` (which is already installed) to create a canvas where users can drag, drop, and arrange the components they've added.
3.  **Manage Frontend State:** Store the list of components, their properties, and their positions in the React component's state.
4.  **Enhance Code Generation:** Update the Jinja2 templates in the backend to handle more component types and properties (e.g., colors, sizes, text).
## **Blue OC Entrance Test Task 3**


This React application demonstrates fetching data from an API and displaying it, along with a basic form for submitting information. It utilizes Redux for state management.

### Features

-   Fetches data from a public API ([JSONPlaceholder](https://jsonplaceholder.typicode.com/)) and displays it in a list.
-   Provides a simple form for submitting data to the same API

### Technologies Used

-   React
-   Redux Toolkit
-   Axios

### Installation

1.  Clone the repository or download the source code.
2.  Install dependencies:

Bash

```
npm install

```

### Running the App

1.  Start a development server:

Bash

```
npm start

```

2.  Open http://localhost:3000/ in your browser.

### Code Breakdown

-   **store.js:** Configures the Redux store with a single reducer for fetching API data.
-   **ApiDisplay.js:** Fetches data using a Redux action and displays it in a list format.
-   **fetchApiSlice.js:** Defines the Redux slice for managing the API fetching state (loading, error, data).
-   **PostForm.js:** Provides a form for submitting data to the API (simulated with an alert message).
-   **App.js:** The main application component, rendering both the form and API display.

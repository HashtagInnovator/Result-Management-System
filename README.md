# Result-Management-System

A Result Management System built using Angular.

## Running the Application

Before running the application, please make sure you have Angular installed. If you haven't installed Angular yet, you can follow the official Angular installation guide.

### Build the Application

To build the application, navigate to the project's root directory in your terminal or command prompt and run the following command:

```console
ng build
```


This command compiles the Angular code and generates the necessary files for running the application.

### Serve the Application

To serve the application on your localhost, use the following command:

```console
ng serve -o
```

The `-o` flag automatically opens the application in your default browser. By default, the application will be served on port 4200.

### Running the Backend

This application requires a JSON server to handle backend operations. Follow these steps to set up the JSON server:

1. Install JSON Server:

   If you haven't installed the JSON server yet, you can do so by running the following command:

```console
npm install -g json-server
```
2. Start the JSON Server:

To start the JSON server and watch a specific JSON database file, use the following command:

```console
json-server --watch {json_database}
```
Replace `{json_database}` with the path to your JSON database file. This command starts the JSON server and makes the database accessible for the Result Management System.

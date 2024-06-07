
# MOVIE APP

This is a web application that interacts with a list of movies. It includes a backend service to handle API requests and a frontend interface to display and manage the movie data. The application allows users to search for movies by title, display a list of movies, and mark movies as favourites.




## Features
- Display Movies: Show the list of movies fetched from the backend.
- Search: Provide a search functionality to filter movies by title.
- Favourites: Allow users to mark movies as favourites and display a list of favourite movies using local storage.
- Search in Favourites: Provide a search functionality to filter movies by title within the favourite movies list.


## Technologies Used

- Frontend: React (Create React App), Axios
- Backend: Node.js, Express
- Render (for hosting Backend)
- Vercel (for hosting frontend)


##  Prerequisites

- Node.js (v14 or higher recommended)
- npm or Yarn
- React.js
##   Getting Started

 ## Backend Setup

  **Clone the repository:**

   ```sh
  
   git clone https://github.com/denmd/Movie_web_application.git
   cd Movie/backend 

```
**Install dependencies**
 ```sh
 npm install

```
**Run the backend server**

```sh
node app.js
```

**Set up environment variables**
```sh
PORT=your-backend-running-port
```

## Frontend Setup

   ```sh
   cd Movie/frontend
```

Install dependencies
 ```sh
 npm install

```

Run the frontend server for development

``` sh
npm start
```
Build the frontend for production
```sh
npm run build
```
base URL of the API server
```sh
http://localhost:PORT/api_request
```
Replace with your localhost and port. Then replace the api request in the frontend



## Testing
## Backend Tests
Implement tests using your preferred testing framework (e.g., Jest, Mocha).Then run
``` ssh
npm test
```
### Frontend Tests

Implement tests using your preferred testing framework (e.g., Jest, React Testing Library).Then run,

``` ssh
npm test
```


## Hosted URL

```sh
https://movie-web-application-one.vercel.app/
```

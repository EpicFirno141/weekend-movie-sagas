# Movies-Saga

## Description

_Duration: 2 Weeks_
This site displays an assortment of movies gathered in the database. Upon entering the home page, all movies are shown. Upon clicking the details button on a movie, you will be brought to the details page for that movie. 

This project uses many-to-many table relationships between genres and movies. All the server calls are made from inside redux-saga.

## Screen Shot

The Home Page:
![image](/Movies-Saga-Home.png)

The Details Page:
![image](/Movies-Saga-Details.png)

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- Postgres
- Postico

## Installation

1. Clone Repo
2. Create a database named `saga_movies_weekend` in postico
3. Navigate to database.sql and copy all the contents
4. Paste the contents into database's sql query
5. Run all queries
6. Open terminal and run `npm install`
7. Run `npm run server`
8. In a seperate terminal, run `npm run client`

## Built With

- Node js
- React
- React-redux
- React-saga
- Material UI
- Axios
- pg
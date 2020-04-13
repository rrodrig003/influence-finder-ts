import "reflect-metadata";
import {createConnection} from "typeorm";

// createConnection()
//   .then(connection => console.log(connection))
//   .catch(e => console.log(e)) 

createConnection(
  {
    'type': "postgres",
    'host': "localhost",
    'port': 5432,
    "username": process.env.USER,
    "password": process.env.PASSWORD,
    'database': process.env.DATABASE,
    "synchronize": true,
    "logging": true,
    "entities": [
      "src/models/**/*.ts"
    ]
  }
)
.then(connection => console.log(connection))
.catch(e => console.log(e))
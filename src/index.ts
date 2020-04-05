import "reflect-metadata";
import {createConnection} from "typeorm";

createConnection()
  .then(connection => console.log(connection))
  .catch(e => console.log(e))

// createConnection(
//   {
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     database: "influencer",
//     synchronize: true,
//     "logging": true,
//     "entities": [
//        "models/*.ts"
//       // "dist/models/*.js"
//     ]
//   }
// )
// .then(connection => console.log(connection))
// .catch(e => console.log(e))
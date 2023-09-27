import express from "express"
// import handlers from "./src/routes/index"
import handlers from "./src/routes/index.ts"
import cors from "cors"
import bodyParser from "body-parser";

import { createPrismaClient } from "./src/config/db.ts";
import { errorHandler } from "./src/middleware/error-handlers.ts";


const server = express()

const PORT = process.env.PORT || 3306;
// load env vars
server.use(express.json())

//cors enable
server.use((req,res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(express.json())


server.use(cors());
server.use("/api/v1", handlers)

//hanlderErrors
server.use(errorHandler);


server.get("/", (req, res) => {

    res.json({message: 'hola mundo'})
});


server.listen(PORT, () => {
    createPrismaClient()
    console.log(`Servidor en http://localhost: ${PORT}`)
})
//cors enable

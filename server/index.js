import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Router from './routes/route.js';

dotenv.config();

// initialising express as a function
const app = express();

app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Router);
const PORT = 8000;
//creating express server
//first argument is port number
//second is a call back function(helps in performing action just after running server)
app.listen(PORT, ()=> console.log(`server is running successfully on PORT ${PORT}`));

const USERNAME = process.env.DB_USERNAME; 
const PASSWORD = process.env.DB_PASSWORD; 

Connection(USERNAME,PASSWORD); 
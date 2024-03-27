import express  from 'express'
import bodyParser from 'body-parser';
import { userRoute } from './routes/userRoutes';
import { createConnection } from 'typeorm';
import dbConfig from './config/dbconfig';
import cors from 'cors'
import { registerRoutes } from './routes/registerRoutes';
import { contactRoute } from './routes/contactRoutes';
import { authRoute } from './routes/authRoutes';


const app=express();
app.use(bodyParser.json());
app.use(cors());

app.use("/users",userRoute)
app.use('/register',registerRoutes)
app.use("/contacts",contactRoute);
app.use("/auth",authRoute);

app.listen(3001,()=>{
    console.log(`Server is running on port 3000`);
    
})

createConnection(dbConfig).then(async()=>{
    console.log('Connected to the database');
}).catch(error=>console.log('Error connecting to the database',error));

import express from 'express';
import { createUser, getUsers } from '../controllers/userController';

export const userRoute=express.Router();
userRoute.post("/",createUser);
userRoute.get('/',getUsers);

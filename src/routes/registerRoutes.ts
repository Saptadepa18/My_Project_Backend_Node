import express from 'express';
import {getUser,RegsiterUser} from  '../controllers/registerController';

export const registerRoutes=express.Router();

registerRoutes.post("/",RegsiterUser);
registerRoutes.get("/",getUser)
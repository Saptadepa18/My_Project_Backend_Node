import express from 'express';
import { createContact,getContacts } from '../controllers/contactController';


export const contactRoute=express.Router();

contactRoute.post("/",createContact);
contactRoute.get("/",getContacts);
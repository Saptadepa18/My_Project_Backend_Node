import { Request,Response } from "express";
import { getRepository } from "typeorm";
import { Regiter } from "../entities/Register";

export const RegsiterUser= async(req:Request,res:Response)=>{
    try{
        const {userName,email,password,role}=req.body;
        const userRepository=getRepository(Regiter);
        const newUser=userRepository.create({
            userName,
            email,
            password,
            role
        });
        await userRepository.save(newUser);
        res.status(201).send('User created successfully');
    }catch(error){
        console.error('Error saving user:',error);
        res.status(500).send('Error saving user');
    }
}

export const getUser=async(req:Request,res:Response)=>{
    try{
        const userRepository=getRepository(Regiter);
        const users=await userRepository.find();
        res.json(users);
    }catch(error){
        console.error('Error fetching user:',error);
        res.status(500).send('Error fetching user');
    }
}
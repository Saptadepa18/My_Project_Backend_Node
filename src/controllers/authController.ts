import { Request,Response } from "express";
import Jwt  from "jsonwebtoken";
import { getRepository } from "typeorm";
import { Regiter } from "../entities/Register";


export const registerUser=async (req:Request,res:Response)=>{
    try{
        const {userName,email,password,role}=req.body;
        const userRepository=getRepository(Regiter);
        const existingUser=await userRepository.findOne({where: email});
        if(existingUser){
            return res.status(400).send('User with this email already exists');
        }
        const newUser=userRepository.create({
            userName,
            email,
            password,
            role
        })
        await userRepository.save(newUser);
        res.status(201).send("User registered successfully");
    }catch(error){
        console.error('Error registering user',error);
        res.status(500).send('Error registering user')
        
    }
}

export const loginUser=async(req:Request,res:Response)=>{
    try{
        const {userName,password}=req.body;
        const userRepository=getRepository(Regiter);
         const user=await userRepository.findOne({ where:{userName,password}});
         if(!user){
            return res.status(401).send('Invalid credentials');
         }
         const token=Jwt.sign({id: user.id, role:user.role},'your_secret_key',{expiresIn:'1h'});
         res.json({token, id:user.id, role:user.role});
    }catch(error){
        console.error('Error loggin in:',error);
        res.status(500).send('Error loggin in');
        
    }
}
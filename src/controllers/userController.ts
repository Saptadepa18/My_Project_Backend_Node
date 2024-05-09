import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entities/User';
import { UserJSON } from '../config/interfaceconfig';
 
export const createUser = async (req: Request, res: Response) => {
  try {
    const userData: UserJSON = req.body;
    const userRepository = getRepository(User);
    const newUser = userRepository.create(userData);
    await userRepository.save(newUser);
    res.status(201).send('User created successfully');
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).send('Error saving user');
  }
};

export const getUsers= async (req:Request,res:Response)=>{
    try{
        const userRepository=getRepository(User);
        const users=await userRepository.find();
        res.json(users);
    }catch(error)
    {
        console.error('Error fetching users:',error);
        res.status(500).send('Error fetching users');
        
    }
}
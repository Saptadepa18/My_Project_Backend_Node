
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Contact } from '../entities/Contact';
 
export const createContact = async (req: Request, res: Response) => {
  try {
    const { name, phone, email, subject, message } = req.body;
    const contactRepository = getRepository(Contact);
    const newContact = contactRepository.create({
      name,
      phone,
      email,
      subject,
      message,
    });
    await contactRepository.save(newContact);
    res.status(201).send('Contact message saved successfully');
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).send('Error saving contact message');
  }
};
 
export const getContacts = async (req: Request, res: Response) => {
  try {
    const contactRepository = getRepository(Contact);
    const contacts = await contactRepository.find();
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).send('Error fetching contacts');
  }
};
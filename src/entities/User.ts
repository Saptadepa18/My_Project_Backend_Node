import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
 
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column()
  firstName: string;
 
  @Column()
  lastName: string;
 
  @Column()
  email: string;
 
  @Column()
  status: boolean;
 
  @Column()
  birthday: Date;
 
  @Column('jsonb')
  skills: string[];
 
  @Column('jsonb')
  avatar: {
    name: string;
    percent: number;
    size: number;
    status: string;
    type: string;
    uid: string;
    url: string;
  }[];
}



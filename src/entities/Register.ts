import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity()
export class Regiter{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    userName:string;

    @Column()
    email:string;

    @Column()
    password:string;

    @Column()
    role:string;
}
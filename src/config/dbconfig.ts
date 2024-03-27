import { ConnectionOptions } from 'typeorm';
import { User } from '../entities/User';
import { Regiter } from '../entities/Register';
import { Contact } from '../entities/Contact';

const dbConfig: ConnectionOptions=
{
    type:"postgres",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"postgres",
    database:"myuserdata",
    entities:[
        User,
        Regiter,
        Contact,
    ],
    synchronize:true,
    logging:true,
}

export default dbConfig;

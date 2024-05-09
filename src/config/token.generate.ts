import jwt from 'jsonwebtoken';

const generateToken: any= function generate(user:any){
    const tokenSecret:string='my-token-secret';
    return jwt.sign({data:user},tokenSecret,{expiresIn:10})
}

export default generateToken;


import { config as dotenv} from 'dotenv';
dotenv();

export const config = {
    host: process.env.HOST || 'localhost',
    password: process.env.PASSWORD,
    user: process.env.USER || 'root',
    database:process.env.DATABASE
}
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export const MONGO_URI = process.env.MONGO_URI;
export const JWT_SECRET = process.env.JWT_SECRET;
export const PORT = process.env.PORT;
export const BCRYPT_SALT_ROUND = Number(process.env.BCRYPT_SALT_ROUND);

import db from '../../orm/orm';
import dotenv from 'dotenv'
import jwt, { Secret } from 'jsonwebtoken';

dotenv.config()

const AdminSignin = async (req: any, res: any) => {
    const { username, password } = req.body;
    try {
        const signinAdmin = await db.selectAll('admin', {
            username,
            password
        })
        const userId = signinAdmin?.rows?.[0]?.id
        const userData = signinAdmin?.rows?.[0]
        const token = jwt.sign({userId}, (process.env.jwtSecret as Secret));

        if (signinAdmin?.rows?.length === 0) {
            return res.status(401).json({
                status: 'error',
                message: 'Invalid login credentials'
            })
        }
  
        return res.status(200).json({
            status: 'success',
            token,
            userData
        })

    } catch {
        return res.status(400).json({
            status: 'error',
            message: 'Ops!!! an error occured'
        })
    }
}

export default AdminSignin
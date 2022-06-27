import db from '../../../orm/orm'
import jwt, { Secret } from 'jsonwebtoken';
import bcrypt from 'bcrypt'

const EmployeeSignin = async (req: any, res: any) => {
    const { email, password } = req.body
    try {
        const signinQuery = await db.selectAll('employee', {email})
        const firstname = signinQuery?.rows?.[0]?.firstname
        const lastname = signinQuery?.rows?.[0]?.lastname
        const userId = signinQuery?.rows?.[0]?.id
        const verifyPassword = await bcrypt.compare(password, signinQuery.rows[0].password)
        const token = jwt.sign({userId}, (process.env.jwtSecret as Secret));
        console.log(token)

        if (verifyPassword && signinQuery.rows.length !== 0) {
            return res.status(200).json({
                status: 'success',
                userId,
                token,
                message: `Welcome ${lastname} ${firstname}`
            })
        } else {
            return res.status(400).json({
                status: 'error',
                message: 'Invalid login credential. Please check email or password'
            })
        }
    } catch {
        return res.status(403).json({
            status: 'error',
            message: 'Ops!! an error occured'
        })
    }
}

export default EmployeeSignin
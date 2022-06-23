import db from '../../orm/orm'
import jwtGenerator from '../../utils/Authorization'
import bcrypt from 'bcrypt'

const EmployeeSignin = async (req: any, res: any) => {
    const { email, password } = req.body
    try {
        const signinQuery = await db.selectAll('employee', {email})
        const firstname = signinQuery?.rows?.[0]?.firstname
        const lastname = signinQuery?.rows?.[0]?.lastname
        const verifyPassword = await bcrypt.compare(password, signinQuery.rows[0].password)
        const token = jwtGenerator(signinQuery?.rows?.[0]?.id)

        if (verifyPassword && signinQuery.rows.length !== 0) {
            return res.status(200).json({
                status: 'success',
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
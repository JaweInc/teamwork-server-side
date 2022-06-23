import db from '../../orm/orm';
import jwtGenerator from '../../utils/Authorization';

const AdminSignin = async (req: any, res: any) => {
    const { username, password } = req.body;
    try {
        const signinAdmin = await db.selectAll('admin', {
            username,
            password
        })

        const token = jwtGenerator(signinAdmin?.rows?.[0]?.id);

        if (signinAdmin?.rows?.length === 0) {
            return res.status(401).json({
                status: 'error',
                message: 'Invalid login credentials'
            })
        }
        return res.status(200).json({
            status: 'success',
            token,
            message: 'Welcome Admin'
        })
    } catch {
        return res.status(400).json({
            status: 'error',
            message: 'Ops!!! an error occured'
        })
    }
}

export default AdminSignin
import db from '../../orm/orm'
import jwt, { Secret } from 'jsonwebtoken'

const AdminDashboard = (req: any, res: any) => {
    jwt.verify(req.headers.token, (process.env.jwtSecret as Secret), async (err: any, authData: any) => {
        try {
            const eid = authData.userId
            const getAdmin = await db.selectAll('admin', {id: eid})
            if (getAdmin?.rows?.length === 0) {
                return res.status(401).json({
                    status: 'error',
                    message: 'Admin not found'
                })
            }
            return res.status(200).json({
                status: 'success',
                message: 'Admin found',
                loggedIn: true,
                data: getAdmin?.rows[0],
                
            })
        } catch (err) {
            res.status(401).json({
                status: 'error',
                message: 'Admin not found',
                loggedIn: false
            })
        }
    })
}

export default AdminDashboard
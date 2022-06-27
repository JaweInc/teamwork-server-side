import db from '../../../orm/orm'
import jwt, { Secret } from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()

const DeleteGif = (req: any, res: any) => {
    jwt.verify(req.token, (process.env.jwtSecret as Secret), async (err: any, authData: any) => {
        try {
            const eid = authData.userId;
            const { id } = req.params;
            if (err) res.sendStatus(403);
            const getGif = await db.selectAll('add_gif', {
                id,
                employee_id: eid
            })

            if (getGif.rows.length === 0) {
                return res.status(403).json({
                    status: 'error',
                    message: 'Unable to get gif'
                })
            } else {
                const deleteGif = await db.deleteRow('add_gif', {
                    id,
                    employee_id: eid
                })

                if (!deleteGif) {
                    return res.status(403).json({
                        status: 'error',
                        message: 'Unable to delete gif'
                    })
                }
            }

            return res.status(200).json({
                status: 'success',
                message: 'Article deleted'
            })

        } catch {
            return res.status(400).json({
                status: 'error',
                message: 'Ops!! Something went wrong'
            })
        }
    })
}

export default DeleteGif
import db from '../../../orm/orm'
import jwt, { Secret } from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()

const DeleteArticle = (req: any, res: any) => {
    jwt.verify(req.token, (process.env.jwtSecret as Secret), async (err: any, authData: any) => {
        try {
            const eid = authData.userId;
            const { id } = req.params;
            if (err) res.sendStatus(403);
            const getArticle = await db.selectAll('add_article', {
                id,
                employee_id: eid
            })

            if (getArticle.rows.length === 0) {
                return res.status(403).json({
                    status: 'error',
                    message: 'Unable to get article'
                })
            } else {
                const deleteArticle = await db.deleteRow('add_article', {
                    id,
                    employee_id: eid
                })

                if (!deleteArticle) {
                    return res.status(403).json({
                        status: 'error',
                        message: 'Unable to Update article'
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

export default DeleteArticle
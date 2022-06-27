import db from '../../../orm/orm'
import jwt, { Secret } from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()

const EditArticle = (req: any, res: any) => {
    jwt.verify(req.token, (process.env.jwtSecret as Secret), async (err: any, authData: any) => {
        try {
            const eid = authData.userId;
            const { id } = req.params;
            const { title, article } = req.body
            if (err) res.sendStatus(403);
            const getArticle = await db.selectAll('add_article', {
                id,
                employee_id: eid
            })
            const getAllArticle = getArticle?.rows?.[0];

            if (getArticle.rows.length === 0) {
                return res.status(403).json({
                    status: 'error',
                    message: 'Unable to get article'
                })
            } else {
                const updateArticle = await db.updateColumns('add_article', { title, article }, {
                    id,
                    employee_id: eid
                })

                if (!updateArticle) {
                    return res.status(403).json({
                        status: 'error',
                        message: 'Unable to Update article'
                    })
                }
            }

            return res.status(200).json({
                status: 'success',
                message: getAllArticle
            })

        } catch {
            return res.status(400).json({
                status: 'error',
                message: 'Ops!! Something went wrong'
            })
        }
    })
}

export default EditArticle
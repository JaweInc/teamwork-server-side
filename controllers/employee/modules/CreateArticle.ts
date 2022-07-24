import db from '../../../orm/orm'
import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid';
dotenv.config()

const CreateArticle = (req: any, res: any) => {

    jwt.verify(req.token, (process.env.jwtSecret as Secret), async (err: any, authData: any) => {
        if (err) res.sendStatus(403);
        const { title, article } = req.body;
        const resourceId = uuidv4();
        const eid = authData.userId
        try {
            const addArticle = await db.create('add_article', {
                employee_id: eid,
                title,
                article,
            })
            if (!addArticle) {
                return res.status(403).json({
                    status: 'error',
                    message: 'error creating the article'
                })
            }
            return res.status(200).json({
                status: 'success',
                message: 'Article succesfully created'
            })
        } catch {
            res.status(400).json({
                status: 'error',
                mesaage: 'Ops!! Something went wrong'
            })
        }
    })
}

export default CreateArticle;
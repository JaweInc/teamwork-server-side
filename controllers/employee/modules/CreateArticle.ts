import db from '../../../orm/orm'
import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()

console.log(1)
const CreateArticle = (req: any, res: any) => {
console.log(2)

    jwt.verify(req.token, (process.env.jwtSecret as Secret), async (err: any, authData: any) => {
console.log(3)

        if (err) res.sendStatus(403);
console.log(4)

        const { title, article } = req.body;
        const eid = authData.userId
console.log(5)

        try {
            const addArticle = await db.create('add_article', {
                employee_id: eid,
                title,
                article
            })
            console.log(6)

            if (!addArticle) {
                return res.status(403).json({
                    status: 'error',
                    message: 'error creating the article'
                })
            }
            console.log(7)

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
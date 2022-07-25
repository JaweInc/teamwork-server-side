import db from '../../../orm/orm'
import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid';
dotenv.config()
//`console.log(uuidv4())
const CreateGif = (req: any, res: any) => {
        jwt.verify(req.token, (process.env.jwtSecret as Secret), async (err: any, authData: any) => {
        if (err) res.sendStatus(403);
        const eid = authData.userId
        const resourceId = uuidv4();
        const { image, title } = req.body;
        try {
            if (err) res.sendStatus(403);
            const isImage = await db.selectAll('add_gif', {image})

            if (isImage.rows.length === 0) {
                const addGif = await db.create('add_gif', {
                    employee_id: eid,
                    image,
                    title,
                    resource_id: resourceId
                })
                if (!addGif) {
                    return res.status(400).json({
                        status: 'error',
                        message: 'error Uploading gif',
                    });
                }
                console.log(addGif)
            } else {
                return res.status(400).json({
                    status: 'error',
                    message: 'error Uploading gif. gif already exists',
                });
            }

            return res.status(200).json({
                status: 'success',
                message: 'Gif Uploaded successfully',
            });
        } catch {
            return res.status(400).json({
                status: 'error',
                message: 'Ops!!! an error has occured'
            })
        }
    })
}

export default CreateGif
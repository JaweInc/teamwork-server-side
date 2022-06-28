import jwt, { Secret } from 'jsonwebtoken'
import db from '../../../orm/orm'

const GifComments = (req: any, res: any) => {
    jwt.verify(req.token, (process.env.jwtSecret as Secret), async (err: any, authData: any) => {
        try {
            const eid = authData.userId;
            const { gifId } = req.params;
            const { comment } = req.body
            if (err) res.sendStatus(403);
            const getGif = await db.selectAll('add_gif', {
                id: gifId
            })

            if (getGif?.rows?.length === 0) {
                return res.status(403).json({
                    status: 'error',
                    message: 'Unable to get gif'
                })
            } else {
                const insertComment = await db.create('gif_comment', {
                    employee_id: eid,
                    gif_id: gifId,
                    comment
                })

                if (!insertComment) {
                    return res.status(403).json({
                        status: 'error',
                        message: 'error posting comment'
                    })
                }
            }

            return res.status(200).json({
                status: 'success',
                message: 'Comment sent'
            })
        } catch {
            return res.status(400).json({
                status: 'error',
                message: 'Ops!! Something went wrong'
            })
        }
    })
}

export default GifComments;
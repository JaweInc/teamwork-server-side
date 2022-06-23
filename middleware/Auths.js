import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const Auths = async (req, res, next) => {
    try {
        const jwtToken = req.header("token")

        if (!jwtToken) {
            return res.status(403).json({
                status: 'error',
                message: 'Not Authorize'
            })
        }

        const payload = jwt.verify(jwtToken, process.env.jwtSecret)
        req.user = payload.user;

    } catch {
        return res.status(403).json({
            status: 'error',
            message: 'Not Authorize'
        })
    }
}
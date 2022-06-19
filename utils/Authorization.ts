import jwt, { Secret } from 'jsonwebtoken'
import dotenv from 'dotenv'


dotenv.config()

const jwtGenerator = (eid: any) => {
    const payload = {
        userId: eid
    }

    return jwt.sign(payload, (process.env.jwtSecret as Secret), { expiresIn: "1hr" })
}

export default jwtGenerator
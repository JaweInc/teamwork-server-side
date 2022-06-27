import dotenv from 'dotenv'

dotenv.config()

const Auths = async (req: any, res: any, next: any) => {
    try {
        const jwtToken = req.header("token")

        if (!jwtToken) {
            return res.status(403).json({
                status: 'error',
                message: 'Not Authorize'
            })
        }
        //const payload = jwt.sign(jwtToken, (process.env.jwtSecret) as Secret)
        req.token = jwtToken;
        next()
        //console.log(payload)

    } catch {
        return res.status(403).json({
            status: 'error',
            message: 'Not Authorize'
        })
    }
}

export  default Auths
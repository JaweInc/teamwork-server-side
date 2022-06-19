import { Pool } from 'pg'
import dotenv from 'dotenv'
dotenv.config()

const pool = new Pool({
    user: process.env.user,
    password: process.env.password,
    host: process.env.host,
    port: Number(process.env.port),
    database: process.env.database
})

export default pool
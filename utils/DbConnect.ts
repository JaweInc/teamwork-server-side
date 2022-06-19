import { Pool } from 'pg'
import dotenv from 'dotenv'
dotenv.config()

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME

    // user: 'postgres',
    // password: 'qwerty',
    // host: 'localhost',
    // port: 5432,
    // database: 'teamwork'
})

// console.log(process.env)

pool.on('connect', ()=>{
    console.log("connected to db...");
})

pool.on('error', ()=>{
    console.log("error to db...");
})

pool.on('acquire', ()=>{
    console.log("acquire to db...");
})

pool.on('remove', ()=>{
    console.log("remove to db...");
})
export default pool
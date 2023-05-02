import express from 'express'
import dotenv from 'dotenv'
import router from './routers'
import  connect  from './db'
import http from 'http'
import bodyParser from 'body-parser'

dotenv.config()

const app = express()
const PORT = process.env.PORT


app.use(bodyParser.json())



const server = http.createServer(app)
server.listen(PORT,()=>{
    console.log(`[+] app started on http://localhost:${PORT}/`)
    
})

connect()
app.use('/',router)
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const MONGO_URI = process.env.MONGO_URI

mongoose.Promise=Promise

const connect=()=>{
    mongoose.connect(MONGO_URI).then(() => {
        console.log('[+] Connected to mongo db')
    }).catch((err) => {
        console.error(err)
    })
}

export default connect
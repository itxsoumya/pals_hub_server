import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.get('/hello', (req: express.Request, res: express.Response) => {
    res.json({ msg: "you are welcome" })
})

app.listen(PORT,()=>{
    console.log('App has been started....')
})
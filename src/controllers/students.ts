import { createStudent, getStudentByUsername, getStudents } from "../db/students"
import { Response, Request } from "express"

export const getAllStudents = async (req: Request, res: Response) => {
    try {
        return res.json(await getStudents().select('-_id -__v'))
    } catch (err) {
        console.error(err)
        return res.sendStatus(400)
    }
}

export const createStudentHandler = async (req: Request, res: Response) => {
    try {
        console.log("[+] inside create student handler")
        const { username, fullname, gender, email, gpa } = req.body
        if (!username || !fullname || !gender || !email || !gpa){
            return res.sendStatus(400)
        }
        const isExist = await getStudentByUsername(username)
        if(isExist){
            return res.status(400).json({msg:`${username} is already exist`})

        }
        await createStudent({
            username,
            fullname,
            gender,
            email,
            gpa,
        })
        return res.sendStatus(200)
    }catch(err){
        console.error(err)
        res.sendStatus(400)
    }
}
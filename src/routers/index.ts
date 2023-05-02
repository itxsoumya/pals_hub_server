import { createStudentHandler, getAllStudents } from "../controllers/students"
import { Router } from "express"

const router = Router()

router.get('/students',getAllStudents)
router.post('/students/create',createStudentHandler)

export default router
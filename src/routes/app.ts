import { Router } from "express";
import { askQuestion } from "../controllers/QuestionController";
import { validateBody } from "../middlewares/validateQuestionsRequest";
import { questionsRequestSchema } from "../schemes/questionRequest";




const appRouter = Router()
appRouter.post("/ask", validateBody(questionsRequestSchema), askQuestion)

export default appRouter
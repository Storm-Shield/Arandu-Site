import express from 'express'
import CandidatesController from '../controller/CandidatesController'

const controller = new CandidatesController()
const router = express.Router()

router.get("/", controller.listAll)
router.get("/topics", controller.listTopics)
router.get("/filter", controller.filterCandidates)

export default routes
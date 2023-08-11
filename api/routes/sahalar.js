import express from "express"
import { createSaha, deleteSaha, getSaha, getSahalar, updateSaha } from "../controllers/sahalar.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router= express.Router()

//CREATE
router.post("/:halisahaid",createSaha)
//UPDATE
router.put("/:id",updateSaha)
//DELETE
router.delete("/:id/:halisahaid",deleteSaha)
//GET
router.get("/:id",getSaha)
//GET ALL
router.get("/",getSahalar)

export default router 
import express, { Router } from "express"
import Halisaha from "../models/Halisaha.js"
import {  countByCity, countByType, createHalisaha, deleteHalisaha, getHalisaha, getHalisahaSaat, getHalisahalar, updateHalisaha } from "../controllers/halisaha.js"


const router= express.Router()

//CREATE
router.post("/",async(req,res)=>{
    const newHalisaha = new Halisaha(req.body)
    try {
        const savedHalisaha = await newHalisaha.save()
        res.status(200).json(savedHalisaha)
    } catch (err) {
        res.status(500).json(err)
    }
})
//UPDATE
router.put("/:id",updateHalisaha)
//DELETE
router.delete("/:id",deleteHalisaha)
//GET
router.get("/find/:id",getHalisaha)
//GET ALL
router.get("/",getHalisahalar)

router.get("/countByCity",countByCity )

router.get("/countByType",countByType)

router.get("/saha/:id",getHalisahaSaat)

export default router 
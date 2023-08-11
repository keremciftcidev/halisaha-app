import Halisaha from "../models/Halisaha.js"
import Sahalar from "../models/Sahalar.js"
import { createError } from "../utils/error.js"

export const createHalisaha = async(req,res,next) =>{
    router.post("/",async(req,res)=>{
        const newHalisaha = new Halisaha(req.body)
        
           try {
           const savedHalisaha = await newHalisaha.save()
           res.status(200).json(savedHalisaha)
        } catch (err) {
           next(err)
        }
       })
}
export const updateHalisaha = async(req,res,next) =>{
    try {
        const updatedHalisaha = await Halisaha.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedHalisaha)
     } catch (err) {
       next(err)
     }
    }

export const deleteHalisaha = async(req,res,next) =>{
    try {
        const updatedHalisaha = await Halisaha.findByIdAndDelete(req.params.id)
        res.status(200).json("halisaha silindi.")
     } catch (err) {
        next(err)
     }
}
export const getHalisaha = async(req,res,next) =>{
    try {
        const halisaha = await Halisaha.findById(req.params.id)
        res.status(200).json(halisaha)
     } catch (err) {
        next(err)
     }
       
}
export const getHalisahalar = async(req,res,next) =>{
    try {
        const halisahalar = await Halisaha.find(req.query)
        res.status(200).json(halisahalar)
     } catch (err) {
        next(err)
     }
       
}
export const countByCity = async(req,res,next) =>{
   const cities = req.query.cities.split(",")
   try {
       const list = await Promise.all(cities.map(city=>{
         return Halisaha.countDocuments({city:city})
       }))
       res.status(200).json(list)
    } catch (err) {
       next(err)
    }
      
}
export const countByType = async(req,res,next) =>{
   // virgül sayısına göre dizi böler split methodu
   const cities = req.query.cities.split(",")
   try {
      // veritabanında city:city oaln kısımları alır ve listlereker
       const list = await Promise.all(cities.map(city=>{
         return Halisaha.countDocuments({city:city})
       }))
       res.status(200).json(list)
    } catch (err) {
       next(err)
    }
      
}

export const getHalisahaSaat = async(req,res,next)=>{
   try {
      const halisaha = await Halisaha.findById(req.params.id)
      const list = await Promise.all(halisaha.sahalar.map(saha=>{
         return Sahalar.findById(saha)
      }))
      res.status(200).json(list)
   } catch (err) {
      next(err)
   }
}

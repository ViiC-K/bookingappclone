import express from "express";

import {
  createHotel,
  updateHotel,
  getHotel,
  getHotels,
  deleteHotel,
  countByCity,
  countByType
} from "../controllers/hotel.js";

import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE HOTEL
router.post("/", verifyAdmin, createHotel);
//UPDATE HOTEL
router.put("/:id", verifyAdmin, updateHotel);
//GET HOTEL
router.get("/find/:id", getHotel);
//GET HOTELS
router.get("/", getHotels);
//DELETE HOTEL
router.delete("/:id", verifyAdmin, deleteHotel);


//client
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;



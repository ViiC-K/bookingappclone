import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from "../controllers/room.js";

const router = express.Router();

//CREATE ROOM
router.post("/:hotelid", verifyAdmin, createRoom);
//UPDATE ROOM
router.put("/:id", verifyAdmin, updateRoom);
//DELETE ROOM
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//GET ROOM
router.get("/:id", getRoom);
//GET ROOMS
router.get("/", getRooms);

export default router;

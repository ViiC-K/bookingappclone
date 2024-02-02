import express from "express";

import {
  updateUser,
  getUser,
  getUsers,
  deleteUser,
} from "../controllers/user.js";

import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello user , you are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user , you are logged in and you can delete your accout");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello admin , you are logged in and you can delete all accouts");
// });

//UPDATE USER
router.put("/:id", verifyUser, updateUser);
//GET USER
router.get("/:id", verifyUser, getUser);
//GET USERS
router.get("/", verifyAdmin, getUsers);
//DELETE USER
router.delete("/:id", verifyUser, deleteUser);

export default router;

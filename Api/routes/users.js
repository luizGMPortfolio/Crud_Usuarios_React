import express from "express";
import { adduser, deleteUser, getUsers, updateUser } from "../controllers/user.js";

const router = express.Router()

router.get("/", getUsers)
router.post("/", adduser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)


export default router
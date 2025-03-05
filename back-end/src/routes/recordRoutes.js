import express from "express";
import { getRecords, addRecord, approveRecord } from "../controllers/recordController.js";
const router = express.Router();

router.get("/", getRecords);
router.post("/add", addRecord);
router.put("/approve/:id", approveRecord);

export default router;

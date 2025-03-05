import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import recordRoutes from "./routes/recordRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// ✅ กำหนดเส้นทาง API
app.use("/api/auth", authRoutes);
app.use("/api/records", recordRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

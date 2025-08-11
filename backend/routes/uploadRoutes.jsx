import express from "express";
import upload from "../utils/uploadImage.js";

const router = express.Router();

// POST /api/upload
router.post("/", upload.single("image"), (req, res) => {
  res.send({
    message: "Image uploaded",
    imagePath: req.file?.path || req.file?.url, // path for local, url for cloud
  });
});

export default router;

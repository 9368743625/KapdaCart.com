import express from "express";
import { 
    getProducts, 
    getProductById, 
    createProduct,
 } from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../utils/uploadImage.jsx";

const router = express.Router();

router
.route("/")
.get(getProducts)
.post(protect,admin ,upload.singal("image"),createProduct);
router.route("/:id").get(getProductById);

export default router;


 
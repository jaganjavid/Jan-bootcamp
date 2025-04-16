import express from "express";
import multer from "multer";
import { getBlogs,createBlog} from "../controllers/blogController.js";
import { protect } from "../middlewares/authMiddleware.js";

const upload = multer({ dest: 'uploads/' })

const router = express.Router();

router.get("/",getBlogs);
router.post("/",protect,upload.single("image"),createBlog);


export default router;
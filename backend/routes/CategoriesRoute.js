import express from "express";
import { getCategories, getCategoriesById, createCategories, updateCategories, deleteCategories, getParentCateList } from "../controllers/Categories.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/category', verifyUser, getCategories);
router.get('/category/:id', verifyUser, getCategoriesById);
router.post('/category', verifyUser, createCategories);
router.patch('/category/:id', verifyUser, updateCategories);
router.delete('/category/:id', verifyUser, deleteCategories);
router.get('/parentcatelist', verifyUser, getParentCateList);

export default router;
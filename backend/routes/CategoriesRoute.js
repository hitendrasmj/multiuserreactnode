import express from "express";
import { getCategories, getCategoriesById, createCategories, updateCategories, deleteCategories } from "../controllers/Categories.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/category', verifyUser, adminOnly, getCategories);
router.get('/category/:id', verifyUser, adminOnly, getCategoriesById);
router.post('/category', verifyUser, adminOnly, createCategories);
router.patch('/category/:id', verifyUser, adminOnly, updateCategories);
router.delete('/category/:id', verifyUser, adminOnly, deleteCategories);

export default router;
import Categories from "../models/CategoriesModel.js";
import Users from "../models/userModel.js";
import { Op } from "sequelize";

export const getCategories = async(req, res) => {
    try {
        let response;
        if(req.role=="admin"){
            response = await Categories.findAll({
                attributes:['uuid', 'prnt_id', 'cate_name', 'status'],
                include:[{
                    model: Users,
                    attributes: ['name', 'email']
                }]
            });
        } else {
            response = await Categories.findAll({
                attributes:['uuid', 'prnt_id', 'cate_name', 'status'],
                where: {
                    userId: req.userId
                },
                include:{
                    model: Users,
                    attributes: ['name', 'email']
                }
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const getCategoriesById = async(req, res) => {
    try {
        const category = await Categories.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if(!category) return res.status(400).json({msg: "Category not found."});
        let response;
        if(req.role=="admin"){
            response = await Categories.findOne({
                attributes: ['uuid', 'prnt_id', 'cate_name', 'status'],
                where:{
                    id: category.id
                },
                include: [{
                    model: Users,
                    attributes: ['name', 'email']
                }]
            });
        } else {
            response = await Categories.findOne({
                attributes: ['uuid', 'prnt_id', 'cate_name', 'status'],
                where:{
                    [Op.and]:[{id:category.id},{userId:req.userId}]
                },
                include: [{
                    model: Users,
                    attributes: ['name', 'email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const createCategories = async(req, res) => {
    const { prnt_id, cate_name, status } = req.body;
    try {
        await Categories.create({
            prnt_id: prnt_id,
            cate_name: cate_name,
            userId: req.userId,
            status: status
        });
        res.status(200).json({msg: "Category created successfully."});
    } catch (error) {
        res.status(500).json({msg: error.message});        
    }
}

export const updateCategories = async(req, res) => {    
    try {
        const category = await Categories.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!category) return res.status(400).json({msg: "Category not found."});
        const {prnt_id, cate_name, status } = req.body;
        if(req.role=="admin"){
            await Categories.update({prnt_id, cate_name, status}, {
                where: {
                    id: category.id
                }
            });
        } else {
            if(req.userId != category.userId) return res.status(400).json({msg: "Forbidden access"});
            await Categories.update({prnt_id, cate_name, status}, {
                where: {
                    [Op.and]:[{id:category.id},{userId:req.userId}]
                }
            });
        }
        
        res.status(200).json({msg: "Category updated successfully."});
    } catch (error) {
        res.status(200).json({msg: error.message});
    }
}

export const deleteCategories = async(req, res) => {
    try {
        const category = await Categories.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if(!category) return res.status(400).json({msg: "Category not found."});

        if(req.role=="admin"){
            await Categories.destroy({
                where:{
                    id: category.id
                }
            });
        } else {
            await Categories.destroy({
                where:{
                    [Op.and]:[{id:category.id},{userId:req.userId}]
                }
            });
        }        
        res.status(200).json({msg: "Category deleted successfully."});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
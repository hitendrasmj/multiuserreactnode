import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./userModel.js";

const { DataTypes } = Sequelize;

const Categories = db.define('categories', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    prnt_id:{
        type: DataTypes.INTEGER,
        allowNull: true,
        validate:{
            notEmpty: true
        }
    },
    cate_name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    status:{
        type: DataTypes.ENUM,
        values: [
            '1',
            '2'
        ],
        defaultValue: '1',
        comment: "1=>active, 2=>deactivate"
    }
},{    
    freezeTableName: true
});

Users.hasMany(Categories);
Categories.belongsTo(Users, { foreignKey: 'userId' });

export default Categories;

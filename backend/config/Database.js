import { Sequelize } from "sequelize";

const db = new Sequelize("auth_db", "root", "Password@121", {
    host: "localhost",
    dialect: "mysql"
});

export default db;
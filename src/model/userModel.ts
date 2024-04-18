import { DataTypes } from "sequelize";
import sequelize from "../config/databaseConfig.js";

sequelize.sync()
    .then(() => {
        console.log('All models were synchronized successfully.');
    })
    .catch((error) => {
        console.error('Error synchronizing models:', error);
    });

const User = sequelize.define('User', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default User;
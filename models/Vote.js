import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection";

class Vote extends Model {}


Vote.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timeStamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'vote'
    }
);




module.exports = Vote;
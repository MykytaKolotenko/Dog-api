"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var connection_1 = require("./connection");
var Dog = connection_1.default.define('dogs', {
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { notNull: true }
    },
    color: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: { notNull: true }
    },
    tail_length: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 1, isInt: true }
    },
    weight: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 1, isInt: true }
    }
}, {
    timestamps: false,
    freezeTableName: true
});
exports.default = Dog;

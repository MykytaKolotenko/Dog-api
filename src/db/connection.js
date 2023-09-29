"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var sequelize_1 = require("sequelize");
(0, dotenv_1.configDotenv)();
var _a = process.env, BASE = _a.BASE, USER = _a.USER, SQL_PASS = _a.SQL_PASS;
if (BASE === undefined || USER === undefined || SQL_PASS === undefined) {
    throw new Error('Please add a requirement environment variable');
}
var sequelize = new sequelize_1.Sequelize(BASE, USER, SQL_PASS, {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = sequelize;

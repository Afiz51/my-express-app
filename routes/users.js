"use strict";
// var express = require('express');
// var router = express.Router();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
const express_1 = __importDefault(require("express"));
const controllerInfo_1 = require("../controller/controllerInfo");
const router = express_1.default.Router();
router.get('/', controllerInfo_1.getUsers);
router.post('/', controllerInfo_1.createUser);
router.get('/:id', controllerInfo_1.getUser);
router.delete('/:id', controllerInfo_1.deleteUser);
router.patch('/:id', controllerInfo_1.updateUser);
// export default router;
module.exports = router;

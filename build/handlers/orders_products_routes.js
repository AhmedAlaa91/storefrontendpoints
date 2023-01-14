"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orders_products_1 = require("../models/orders_products");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const o = new orders_products_1.OrderProducts();
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let userId;
    try {
        const authorizationHeader = req.headers.authorization;
        const token = authorizationHeader.split(' ')[1];
    }
    catch (err) {
        res.status(401);
        res.json('invalid token');
        return;
    }
    const prodResult = yield o.create();
    res.json(prodResult);
});
const showActive = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let userId;
    try {
        const authorizationHeader = req.headers.authorization;
        const token = authorizationHeader.split(' ')[1];
        const decoded = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
        userId = decoded.usr.id;
    }
    catch (err) {
        res.status(401);
        res.json('invalid token');
        return;
    }
    const prodResult = yield o.showActive(userId);
    res.json(prodResult);
});
const orderproductsRoutes = (app) => {
    app.post('/addorder/', create);
    app.get('/currentorders/', showActive);
};
exports.default = orderproductsRoutes;

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
const products_1 = require("../models/products");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prod = new products_1.products();
const index = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const prodResults = yield prod.index();
    res.json(prodResults);
});
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const prodResult = yield prod.show(req.body.id);
    res.json(prodResult);
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authorizationHeader = req.headers.authorization;
        const token = authorizationHeader.split(' ')[1];
        jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
    }
    catch (err) {
        res.status(401);
        res.json('invalid token');
        return;
    }
    try {
        const product = {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category
        };
        const newProd = yield prod.create(product);
        res.json(newProd);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const productRoutes = (app) => {
    app.get('/products', index);
    app.get('/products/:id', show);
    app.post('/products', create);
};
exports.default = productRoutes;

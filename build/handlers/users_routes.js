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
const users_1 = require("../models/users");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const u = new users_1.users();
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    const prodResults = yield u.index();
    res.json(prodResults);
});
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let userId;
    try {
        const authorizationHeader = req.headers.authorization;
        console.log(authorizationHeader);
        const token = authorizationHeader.split(' ')[1];
        jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
        const decoded = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
        userId = decoded.usr.id;
    }
    catch (err) {
        res.status(401);
        res.json('invalid token');
        return;
    }
    const prodResult = yield u.show(userId);
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
        const usr = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            pwd: req.body.pwd
        };
        const newUser = yield u.create(usr);
        let token = jsonwebtoken_1.default.sign({ usr: newUser }, process.env.TOKEN_SECRET);
        res.json(token);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userloged = yield u.authenticate(req.body.firstname, req.body.pwd);
        let token = jsonwebtoken_1.default.sign({ usr: userloged }, process.env.TOKEN_SECRET);
        res.json(token);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const userRoutes = (app) => {
    app.get('/users', index);
    app.get('/users/:id', show);
    app.post('/users', create);
    app.post('/login', login);
};
exports.default = userRoutes;

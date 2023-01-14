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
const __1 = __importDefault(require("../.."));
const supertest_1 = __importDefault(require("supertest"));
const request = (0, supertest_1.default)(__1.default);
describe('Endpoints Test responses', () => {
    let token = '';
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(__1.default).post('/login').send({
            "firstname": "User one",
            "pwd": "Password123"
        })
            .set("Accept", "application/json");
        token = response.body;
    }));
    //const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3IiOnsiaWQiOjEsImZpcnN0bmFtZSI6IlVzZXIgb25lIiwibGFzdG5hbWUiOiJmaXJzdCIsInB3ZCI6IiQyYiQxMCRoS0RITXpPbGlQRGFJc0xKLi5DWXNlbFg2WkJvUUZHdEplMklyd1B1T0RSaEl6TVNWa3FSNiJ9LCJpYXQiOjE2NzM2MTg3MDd9.CprZbinGmlEoMDqOYYNubFBI3ImiNLtVK-l7uX1N1uA"
    it('current orders api endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/currentorders').set("Authorization", "bearer " + token);
        expect(response.statusCode).toBe(200);
    }));
    it('addorder api endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.post('/addorder').set("Authorization", "bearer " + token);
        expect(response.statusCode).toBe(200);
    }));
    it('getorders api endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/orders').set("Authorization", "bearer " + token);
        expect(response.statusCode).toBe(200);
    }));
    it('addproducts api endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.post('/products').set("Authorization", "bearer " + token).send({
            name: "coffee",
            price: "300",
            category: "beverage"
        })
            .set("Accept", "application/json");
        expect(response.statusCode).toBe(200);
    }));
    it('getproducts api endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/products');
        expect(response.statusCode).toBe(200);
    }));
    it('getproductperid api endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/products/:id').send({ "id": 1
        })
            .set("Accept", "application/json");
        expect(response.statusCode).toBe(200);
    }));
    it('login api endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.post('/login').send({
            "firstname": "User one",
            "pwd": "alaa"
        })
            .set("Accept", "application/json");
        expect(response.statusCode).toBe(200);
    }));
    it('adduser api endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.post('/users').set("Authorization", "bearer " + token).send({
            "firstname": "User two",
            "lastname": "okay",
            "pwd": "Lilo@2023"
        })
            .set("Accept", "application/json");
        expect(response.statusCode).toBe(200);
    }));
    it('getuser the api endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/users').set("Authorization", "bearer " + token).send({
            "id": 1
        })
            .set("Accept", "application/json");
        expect(response.statusCode).toBe(200);
    }));
    it('getusers api endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/users').set("Authorization", "bearer " + token);
        expect(response.statusCode).toBe(200);
    }));
});

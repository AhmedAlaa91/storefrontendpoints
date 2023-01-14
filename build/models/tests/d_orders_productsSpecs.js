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
Object.defineProperty(exports, "__esModule", { value: true });
const orders_products_1 = require("../orders_products");
const ord = new orders_products_1.OrderProducts();
describe('orders products Model', () => {
    it('should have an index method', () => {
        expect(ord.showActive).toBeDefined();
    });
    it('should have an create method', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(ord.create).toBeDefined();
    }));
    it('create method should add a order product', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(ord.create()).toBeTruthy();
    }));
    it('Showactive orders method should show current orders ', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield ord.showActive(1);
        expect(JSON.parse(JSON.stringify(result))).toEqual([{
                "quantity": 15,
                "name": "Coffee Bean",
                "status": "active",
                "firstname": "User one"
            }]);
    }));
});

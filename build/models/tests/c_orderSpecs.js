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
const orders_1 = require("../orders");
const ord = new orders_1.orders();
describe('orders Model', () => {
    it('should have an index method', () => {
        expect(ord.index).toBeDefined();
    });
    it('should have an create method', () => {
        expect(ord.create).toBeDefined();
    });
    it('create method should create an order ', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield ord.create();
        expect(result).toEqual([{
                "id": 1,
                "user_id": 1,
                "status": "active"
            }]);
    }));
    it('index method should show all orders ', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield ord.index();
        expect(result).toEqual([{
                "id": 1,
                "user_id": 1,
                "status": "active"
            }]);
    }));
});

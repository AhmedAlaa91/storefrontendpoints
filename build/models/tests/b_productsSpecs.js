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
const products_1 = require("../products");
const prods = new products_1.products();
describe('products Model', () => {
    it('should have an index method', () => {
        expect(prods.index).toBeDefined();
    });
    it('should have an show method', () => {
        expect(prods.show).toBeDefined();
    });
    it('should have an create method', () => {
        expect(prods.create).toBeDefined();
    });
    it('reset sequence', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield prods.resetSeq();
        expect(result).toEqual('seq reset');
    }));
    it('create method should add a product', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield prods.create({
            name: 'Coffee Bean',
            price: 250,
            category: 'Beverage'
        });
        expect(result).toEqual({
            id: 1,
            name: 'Coffee Bean',
            price: 250,
            category: 'Beverage'
        });
    }));
    it('index method should return a list of products', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield prods.index();
        expect(result).toEqual([
            {
                id: 1,
                name: 'Coffee Bean',
                price: 250,
                category: 'Beverage'
            }
        ]);
    }));
    it('show method should return the correct product', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield prods.show('1');
        expect(result).toEqual([
            {
                id: 1,
                name: 'Coffee Bean',
                price: 250,
                category: 'Beverage'
            }
        ]);
    }));
});

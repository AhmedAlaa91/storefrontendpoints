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
const users_1 = require("../users");
const usr = new users_1.users();
describe('users Model', () => {
    it('should have an index method', () => {
        expect(usr.index).toBeDefined();
    });
    it('should have an show method', () => {
        expect(usr.show).toBeDefined();
    });
    it('should have an create method', () => {
        expect(usr.create).toBeDefined();
    });
    it('should have an authenticate method', () => {
        expect(usr.authenticate).toBeDefined();
    });
    it('reset sequence user table', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield usr.resetSeq();
        expect(result).toEqual('seq reset');
    }));
    let userCreated;
    it('create method should add a user', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield usr.create({
            firstname: 'User one',
            lastname: 'first',
            pwd: 'Password123'
        });
        userCreated = result;
        expect(result).toBeTruthy();
    }));
    // it('Authenticate a user', async () => {
    //const result = await usr.authenticate('User one', 'Password');
    // expect(result).toBeTruthy()
    // });
    it('show method should show a user', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield usr.show(1);
        expect(result).toEqual([userCreated]);
    }));
    it('index method should show all users ', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield usr.index();
        expect(result).toEqual([userCreated]);
    }));
});

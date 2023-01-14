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
exports.users = void 0;
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const pepper = process.env.BYCRYPT_PASSWORD;
const saltRounds = '' + process.env.SALT_ROUNDS;
class users {
    resetSeq() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = 'ALTER SEQUENCE users_id_seq RESTART; delete from users;';
                yield conn.query(sql);
                conn.release();
                return 'seq reset';
            }
            catch (err) {
                throw new Error(`cannot get products ${err}`);
            }
        });
    }
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = 'select id , firstName ,lastName as LastName , pwd from users';
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`cannot get users ${err}`);
            }
        });
    }
    show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id);
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT id , firstName ,lastName as LastName , pwd FROM  users where id=${id}`;
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Could not find user ${id}. Error: ${err}`);
            }
        });
    }
    create(p) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const hash = bcrypt_1.default.hashSync(p.pwd + pepper, parseInt(saltRounds));
                const sql = `INSERT INTO users (firstname, lastName, pwd ) VALUES('${p.firstname}', '${p.lastname}', '${hash}') RETURNING *`;
                const result = yield conn.query(sql);
                const users = result.rows[0];
                conn.release();
                return users;
            }
            catch (err) {
                throw new Error(`Could not add new user ${p.firstname}. Error: ${err}`);
            }
        });
    }
    authenticate(firstName, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.default.connect();
            const sql = `SELECT pwd FROM users WHERE firstName='${firstName}'`;
            const result = yield conn.query(sql);
            if (result.rows.length) {
                const user = result.rows[0];
                console.log(bcrypt_1.default.compareSync(password + pepper, user.pwd));
                if (bcrypt_1.default.compareSync(password + pepper, user.pwd)) {
                    console.log("right");
                    const sql2 = `SELECT * FROM users WHERE firstName='${firstName}'`;
                    const result = yield conn.query(sql2);
                    const data = result.rows[0];
                    return data;
                }
            }
            return null;
        });
    }
}
exports.users = users;

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
exports.OrderProducts = void 0;
const database_1 = __importDefault(require("../database"));
class OrderProducts {
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql_seq = 'ALTER SEQUENCE orders_products_id_seq RESTART; delete from orders_products;';
                yield conn.query(sql_seq);
                const sql = 'insert into orders_products (quantity,order_id,prod_id) values (15,1,1) RETURNING (quantity,order_id,prod_id) ';
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`cannot get orders ${err}`);
            }
        });
    }
    showActive(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `select orders_products.quantity ,products.name , orders.status , users.firstname
        from orders_products 
        inner join products on orders_products.prod_id=products.id
        inner join orders on orders_products.order_id=orders.id
        left join users on users.id = orders.user_id
        where orders.user_id=${userId} and orders.status='active'`;
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Could not find order ${userId}. Error: ${err}`);
            }
        });
    }
}
exports.OrderProducts = OrderProducts;

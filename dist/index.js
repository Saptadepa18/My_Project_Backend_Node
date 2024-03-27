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
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: "postgres",
    host: "localhost",
    database: "myuserdata",
    password: "postgres",
    port: 5432
});
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, firstName, lastName, email, status, birthday, skills, avatar } = req.body;
        const query = 'INSERT INTO users (data) values ($1) RETURNING *';
        const values = [req.body];
        const result = yield pool.query(query, values);
        res.status(201).json(result.rows[0]);
    }
    catch (error) {
        console.error('Error inserting data:');
        res.status(500).json({ error: "Internal server error" });
    }
}));
app.listen(3000, () => {
    console.log(`Server is running on port ${3000}`);
});

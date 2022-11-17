"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { string } from "@hapi/joi";
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    title: String,
    description: String,
    imagePath: String
});
exports.default = mongoose_1.model('Photo', schema);
//# sourceMappingURL=Photo.js.map
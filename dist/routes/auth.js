"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const auth_1 = require("../controllers/auth");
router.post('/signup', auth_1.signup);
router.post('/signin', auth_1.signin);
router.get('/profile', auth_1.profile);
exports.default = router;
//# sourceMappingURL=auth.js.map
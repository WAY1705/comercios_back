"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
// rutes auth
const auth_1 = __importDefault(require("./routes/auth"));
// import PhotoController from './routes/photo'
// Initializations
const app = express_1.default();
// settings
app.set('port', 3001 || process.env.PORT);
// Middlewares
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(cors_1.default());
// Routes
app.use('/api/auth', auth_1.default);
// app.use('/api/photo', PhotoController);
// this folders for this application will be used to store public file images
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
exports.default = app;
//# sourceMappingURL=app.js.map
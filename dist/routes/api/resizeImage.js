"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var processImage_1 = __importDefault(require("../../funcs/processImage"));
var validateParameters_1 = __importDefault(require("../../middleware/validateParameters"));
var resizeImageRoute = express_1.default.Router();
resizeImageRoute.get('/', validateParameters_1.default, processImage_1.default);
exports.default = resizeImageRoute;

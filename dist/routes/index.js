"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resizeImage_1 = __importDefault(require("./api/resizeImage"));
var mainRoute = express_1.default.Router();
mainRoute.get('/', function (req, res) {
    res.status(200).send('Image Processing API Main Route');
});
mainRoute.use('/resize-image', resizeImage_1.default);
exports.default = mainRoute;

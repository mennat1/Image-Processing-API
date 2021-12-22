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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var __1 = __importDefault(require(".."));
var helperFuncs_1 = require("../funcs/helperFuncs/helperFuncs");
var fs_1 = __importDefault(require("fs"));
var request = (0, supertest_1.default)(__1.default);
describe('API', function () {
    it('should return a message', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response1, response2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/')];
                case 1:
                    response1 = _a.sent();
                    expect(response1.text).toBe('Welcome to Image Processing API');
                    return [4 /*yield*/, request.get('/image-processing-api')];
                case 2:
                    response2 = _a.sent();
                    expect(response2.text).toBe('Image Processing API Main Route');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should should return a status of 200', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/')];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should return a message if image does not exist', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/image-processing-api/resize-image?filename=filenotFound&width=400&height=300')
                    // console.log(response.status)
                ];
                case 1:
                    response = _a.sent();
                    // console.log(response.status)
                    expect(response.status).toBe(403);
                    expect(response.body.ok).toBe('failed');
                    expect(response.body.message).toBe('Input file is missing');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should should return a status of 200', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/')];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should return an error if a parameter is missing', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/image-processing-api/resize-image')
                    //   console.log("!!!!!!!!!!!!!!!!!!!!!!!!!", response.text);
                ];
                case 1:
                    response = _a.sent();
                    //   console.log("!!!!!!!!!!!!!!!!!!!!!!!!!", response.text);
                    expect(response.text).toEqual('Error: Parameter(s) missing..');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should return an error message if width is not a number', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/image-processing-api/resize-image?filename=img1&width=hello&height=400')];
                case 1:
                    response = _a.sent();
                    expect(response.text).toBe('height and width should be numbers');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should return an error message if height is not a number', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/image-processing-api/resize-image?filename=img1&width=hello&height=hello')];
                case 1:
                    response = _a.sent();
                    expect(response.text).toBe('height and width should be numbers');
                    expect(response.status).toBe(400);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should return a status of 400 if an error occured', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/image-processing-api/resize-image?filename=img1&width=hello&height=hello')];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(400);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('Using Sharp', function () {
    it('should return an error message if file does not exist', function () { return __awaiter(void 0, void 0, void 0, function () {
        var filename, height, width, resizePath, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filename = 'img5';
                    height = 300;
                    width = 300;
                    resizePath = "./images/cache/".concat(filename).concat(width, "x").concat(height, ".jpeg");
                    return [4 /*yield*/, (0, helperFuncs_1.sharpResize)(filename, height, width)];
                case 1:
                    response = _a.sent();
                    response.toFile(resizePath, function (err) {
                        expect(err.message).toEqual('Input file is missing');
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it('shoud create a resized image', function () { return __awaiter(void 0, void 0, void 0, function () {
        var filename, height, width, testPath, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filename = 'img1';
                    height = 200;
                    width = 500;
                    testPath = "./src/tests/images/".concat(filename).concat(width, "x").concat(height, ".jpeg");
                    return [4 /*yield*/, (0, helperFuncs_1.sharpResize)(filename, height, width)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.toFile(testPath, function () { return __awaiter(void 0, void 0, void 0, function () {
                            var d;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, fs_1.default.existsSync(testPath)];
                                    case 1:
                                        d = _a.sent();
                                        expect(d).toEqual(true);
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});

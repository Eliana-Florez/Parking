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
var express_1 = require("express");
var Vehiculo_1 = __importDefault(require("../models/Vehiculo"));
var vehiculosRoutes = /** @class */ (function () {
    function vehiculosRoutes() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    vehiculosRoutes.prototype.getPosts = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var post;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Vehiculo_1.default.find()];
                    case 1:
                        post = _a.sent();
                        res.json({ Post: post });
                        return [2 /*return*/];
                }
            });
        });
    };
    vehiculosRoutes.prototype.postPosts = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, placaVehiculo, tipoVehiculo, marcaVehiculo, colorVehiculo, newPost;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, placaVehiculo = _a.placaVehiculo, tipoVehiculo = _a.tipoVehiculo, marcaVehiculo = _a.marcaVehiculo, colorVehiculo = _a.colorVehiculo;
                        newPost = new Vehiculo_1.default({ placaVehiculo: placaVehiculo, tipoVehiculo: tipoVehiculo, marcaVehiculo: marcaVehiculo, colorVehiculo: colorVehiculo });
                        return [4 /*yield*/, newPost.save()];
                    case 1:
                        _b.sent();
                        res.json({ status: res.status, data: newPost });
                        return [2 /*return*/];
                }
            });
        });
    };
    vehiculosRoutes.prototype.putPosts = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var placaVehiculo, post;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        placaVehiculo = req.body.placaVehiculo;
                        return [4 /*yield*/, Vehiculo_1.default.findOneAndUpdate({ placaVehiculo: placaVehiculo }, req.body)];
                    case 1:
                        post = _a.sent();
                        res.json({ status: res.status, data: post });
                        return [2 /*return*/];
                }
            });
        });
    };
    vehiculosRoutes.prototype.deletePosts = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var placaVehiculo, post;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        placaVehiculo = req.body.placaVehiculo;
                        return [4 /*yield*/, Vehiculo_1.default.findOneAndRemove({ placaVehiculo: placaVehiculo })];
                    case 1:
                        post = _a.sent();
                        res.json({ status: res.status, data: post });
                        return [2 /*return*/];
                }
            });
        });
    };
    vehiculosRoutes.prototype.routes = function () {
        this.router.get("/", this.getPosts);
        this.router.post("/", this.postPosts);
        this.router.put("/", this.putPosts);
        this.router.delete("/", this.deletePosts);
    };
    return vehiculosRoutes;
}());
var vehiculoRoutes = new vehiculosRoutes();
exports.default = vehiculoRoutes.router;

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
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
//import functions files
const messageSend_1 = require("./src/messageSend");
const sleep_1 = require("./util/sleep");
spammer();
function spammer() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`
 _____                 _                _  _                                 _           
|     | ___  ___  ___ | |_  _____  ___ | || | ___  _ _ _    ___  ___  ___  _| | ___  ___ 
| | | || .'||  _||_ -||   ||     || .'|| || || . || | | |  |_ -|| -_||   || . || -_||  _|
|_|_|_||__,||_|  |___||_|_||_|_|_||__,||_||_||___||_____|  |___||___||_|_||___||___||_|  
`);
        const marshmallowLink = prompt("marshmallowLink> ");
        const content = prompt("messageContent> ");
        const amount = parseFloat(prompt("amount> "));
        yield (0, messageSend_1.messageSend)(marshmallowLink, content, amount);
        console.log("3秒後に閉じます。");
        yield (0, sleep_1.sleep)(3000);
        process.exit(0);
    });
}

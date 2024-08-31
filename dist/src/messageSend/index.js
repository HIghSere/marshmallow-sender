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
exports.messageSend = messageSend;
const puppeteer_1 = __importDefault(require("puppeteer"));
//Import functions files
const randomString_1 = require("../../util/randomString");
const sleep_1 = require("../../util/sleep");
function messageSend(marshmallowLink, content, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        if (marshmallowLink === "" || content === "" || isNaN(amount)) {
            return console.log("マシュマロのリンクかメッセージの内容がない、またはamountが無効です。");
        }
        else {
            const browser = yield puppeteer_1.default.launch({
                headless: true,
            });
            const page = yield browser.newPage();
            //Countor
            let sendCount = 0;
            let errorCount = 0;
            //Selectors
            const msgField = "#message_content";
            const msgSend = "#new_message > fieldset > div.mb-3.text-center > button";
            const msgSend1 = "#confirm-message > div > div > div.modal-footer > button.btn.btn-secondary";
            try {
                for (let i = 0; i < amount; i++) {
                    yield page.goto(marshmallowLink);
                    yield page.waitForSelector(msgField);
                    yield page.type(msgField, `${content} #${(0, randomString_1.randomString)(5)}`);
                    yield page.waitForSelector(msgSend);
                    yield page.click(msgSend);
                    yield page.waitForSelector(msgSend1);
                    yield page.click(msgSend1);
                    yield (0, sleep_1.sleep)(2000);
                    sendCount++;
                    console.log(`${sendCount} | ✓送信`);
                }
            }
            catch (error) {
                errorCount++;
                return console.error('[ERROR]', error);
            }
            finally {
                console.log(`
✓マシュマロの送信が終了しました。
成功: ${sendCount}
失敗: ${errorCount}
`);
                yield (0, sleep_1.sleep)(3000);
                yield browser.close();
            }
        }
    });
}

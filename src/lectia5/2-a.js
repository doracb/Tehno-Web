import crypto from "crypto-js";

let word1 = "word1";
let word2="word2";

let crypt = crypto.AES.encrypt(JSON.stringify(word1), "secret key meow").toString();

console.log(crypt);

let bytes = crypto.AES.decrypt(crypt, "secret key meow");
let decrypt = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log(decrypt);
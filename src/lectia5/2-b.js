import { rimraf } from "rimraf";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const filenamee = fileURLToPath(import.meta.url);
const dirnamee = path.dirname(filenamee);

const dirPath = path.join(dirnamee, "newFolder");
const filePath = path.join(dirPath, "newFile.txt");

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    console.log("Director creat aici: ", dirPath);
}

fs.writeFileSync(filePath, "Fisier nou woooo!");
console.log("Fisier nou creat in director...");

await rimraf(dirPath);
console.log("Directorul a fost sters cu succes!");
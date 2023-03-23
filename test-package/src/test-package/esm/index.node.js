import fs from "fs";

export * from "./index.web.js";

console.log("fs.readFileSync: ", fs.readFileSync);

export const readFileText = (filename) => {
    return fs.readFileSync(filename);
}

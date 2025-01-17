import { writeFileSync } from "fs";

console.log("Start Write")
writeFileSync("./data/file.txt", "My name is John", {
 flag: "w"
})
console.log("End Write")
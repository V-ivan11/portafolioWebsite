export default function readNotes() {
    const fs = require("fs");
    const files = fs.readdirSync("/notes/");
    console.log(files)
}
const path=require("path");
const bsname=path.basename("/users/document/index.js");
console.log(bsname);
const filename=path.basename("/users/document/index.js",".js");
console.log(filename);

console.log(__dirname);
console.log(__filename);
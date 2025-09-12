const path=require("path");
const bsname=path.basename("/users/document/index.js");
//console.log(bsname);
const filename=path.basename("/users/document/index.js",".js");
//console.log(filename);

// console.log(__dirname);
// console.log(__filename);

const mypath=path.join(__dirname,"photos","upload","doc4.txt");
// console.log(mypath);

const mydir=path.dirname(__filename);
// console.log(mydir);

const myext=path.extname("doc3.pdf");
console.log(myext);
const myext2=path.extname("index.html");
console.log(myext2);
const myext3=path.extname("user.js");
console.log(myext3);

console.log(path.resolve("/users","docs","doc4.txt"));
console.log(path.resolve("/users","/docs","doc4.txt"));
console.log(path.resolve(__dirname,"config","app.json"));

const pathInfo=path.parse("/user/images/gallery/index.html");
console.log(pathInfo);
console.log(pathInfo.base);
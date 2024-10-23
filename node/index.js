// const http = require("http");
// const event = require("events");
// const { url } = require("inspector");

// const myEvent = new event();
// myEvent.on("load", (name = "guest") => {
//   console.log(`Welcome ${name}`);
// });
// myEvent.on("abc", (name = "guest") => {
//   console.log(`Welcome again ${name}`);
// });
// // myEvent.once("new",()=>{
// //     console.log("called once");
// // });

// function greet(name = "guest") {
//   console.log(name);
// }
// const callback = (stream) => {
//     console.log('someone connected!');
//   };
// const server = http.createServer((req, res) => {
//   console.log("Hello buddy");
//   myEvent.emit("load", "Mansi");
//   myEvent.emit("abc", "mansi");
//   myEvent.off("abc",greet);
//   myEvent.emit("abc");
//   myEvent.emit("load", "Mansi1");
//   // if(req.url ==="/new"){
//   //     myEvent.emit("new");
//   // }

//   // ...
//   server.on('connection', callback);
//   server.removeListener('connection', callback);
//   res.end("end");
// });
// const port = 8080;
// server.listen(port, () => {
//   console.log(`listening on ${port}`);
// });

const http = require("http");
const event = require("events");
const myEvent = new event();


myEvent.on("load", (name) => {
console.log(`Welcome ${name}`);
});
myEvent.on("abc", (guest) => {
console.log(`abc ${guest}`);
});
myEvent.once("new", () => {
console.log("called once");
});
function greet() {
console.log("Removed");
}
const callback = (stream) => {
console.log(`removed ${stream}`);
};
myEvent.on("connection", callback);
const server = http.createServer((req, res) => {
myEvent.emit("connection", "first");
myEvent.removeListener("connection", callback);
myEvent.emit("connection", "second");

res.end("hello");
});
server.listen(3000, () => {
console.log("running");
});
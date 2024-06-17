/*const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware!");
  next(); // Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log("In another middleware!");
  //...
  res.send("<h3>Hello from Express!</h3>");
});

const server = http.createServer(app);

server.listen(3000);
*/

const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("This always runs!");
  next();
});

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name"title"><button type="submit">Add</button></form>',
  );
});

app.use("/", (req, res, next) => {
  console.log("In another middleware!");
  res.send("<h3>Hello from Express!!!</h3>");
});

app.listen(3000);

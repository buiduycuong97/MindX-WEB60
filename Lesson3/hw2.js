const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/index") {
    res.end("<h1>Day la trang chu</h1>");
  } else if (req.url === "/about") {
    res.end("<h1>Day la thong tin ca nhan cua ban than</h1>");
  } else {
    res.end("<h1>Duong dan nay khong ton tai</h1>");
  }
});
server.listen(5000);

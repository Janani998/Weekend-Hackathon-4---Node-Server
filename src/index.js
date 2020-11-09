var http = require("http");

const httpServer = http.createServer(handleServer);

const obj = JSON.stringify({
  phone: "18602100000",
  email: "guestcaredominos@jublfood.com"
});

function handleServer(req, res) {
  if (req.url === "/welcome") {
    res.status = 200;
    res.write("Welcome to Dominos!");
    res.end();
  }
  if (req.url === "/contact") {
    res.status = 200;
    res.write(obj);
    res.end();
  } else {
    res.status = 404;
    res.statusMessage = "Not found";
    res.end();
  }
}

httpServer.listen(8081);

module.exports = httpServer;

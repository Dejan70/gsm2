const http = require("http");
const getReq = require("./methods/get-request");


const PORT = process.env.PORT || 5001;
//const PORT = process.env.PORT || 80;

const server = http.createServer((req, res) => {
// req.movies = movies;
  switch (req.method) {
    case "GET":
      getReq(req, res);
      break;

//     deleteReq(req, res);
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.write(
        JSON.stringify({ title: "Not Found", message: "Route not found" })
      );
      res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server started on port : ${PORT}`);
});
//************ */


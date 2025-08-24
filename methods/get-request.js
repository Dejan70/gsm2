//const add = require('./math');
const add = require('../server');
const fun1 = require('../server');

// Use the imported function
//console.log(add(2, 3));  // Output: 5
//console.log(fun1(2, 3));  // Output: 5

const crypto = require("crypto");
//const requestBodyparser = require("../util/body-parser");
//const writeToFile = require("../util/write-to-file");
module.exports = async(req, res) => {
  
  let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
//  console.log(`Server  base url: `,baseUrl);
  let id = req.url.split("/")[3];
  /// console.log(`Server  body req 3 : `,id);
     let id2 = req.url.split("/")[2];
//   console.log(`Server  body req 2 : `,id2);
     let id1 = req.url.split("/")[1];
//   console.log(`Server  body req 1 : `,id1);
   let id3 = req.url.split("/")[3];
//  console.log(`Server  body req 3 : `,id3);
      let id4 = req.url.split("/")[4];
  // console.log(`Server  body req 4 : `,id4);
        let id5 = req.url.split("/")[5];
  // console.log(`Server  body req 5 : `,id5);

          let id6 = req.url.split("/")[6];
 // console.log(`Server  body req 6 : `,id6);
     let id7 = req.url.split("/")[7];
      let id8 = req.url.split("/")[8];
      let id9 = req.url.split("/")[9];
       let id10 = req.url.split("/")[10];
         
        let id11 = req.url.split("/")[11];
        let id12 = req.url.split("/")[12];
        let id13 = req.url.split("/")[13];
        let id14 = req.url.split("/")[14];
         let id15 = req.url.split("/")[15];



          let id20 = req.url.split("/")[20];
//  console.log(`Server  body req 20 : `,id20);
     console.log(`************************ `);

console.log(add(2, 3));  // Output: 5
//fun1(333,id1,id2,id3,id4,id5,id6,id7)
fun1(id1,id2,id3,id4,id5,id6,id7,id8,id9,id10,id11,id12,id13,id14,id15)
  const regexV4 = new RegExp(
    /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
  );

  
  /*
  module.exports = async (req, res) => {
  
 if (req.url === "/api/movies") {
      let body = await requestBodyparser(req);
          console.log(`Server  body req : `,body);
           console.log(`Server  body req : `,req.url);
 }
  }
*/

  if (req.url === "/api/movies") {
   //  console.log(`Server  body req : `,req.url);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
  //  res.write(JSON.stringify(req.movies));
   res.write(JSON.stringify(777));
    res.end();
  } else if (!regexV4.test(id)) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        title: "Validation Failed",
        message: "UUID is not valid",
      })
    );
  } else if (baseUrl === "/api/movies/" && regexV4.test(id)) {
    res.setHeader("Content-Type", "application/json");
  //  let filteredMovie = req.movies.filter((movie) => {
     let filteredMovie = req.movies.filter((movie) => {
    //  return movie.id === id;
    return 777;
    });

    if (filteredMovie.length > 0) {
      res.statusCode = 200;
      res.write(JSON.stringify(filteredMovie));
      res.end();
    } else {
      res.statusCode = 404;
      res.write(
        JSON.stringify({ title: "Not Found", message: "Movie not found" })
      );
      res.end();
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ title: "Not Found", message: "Route not found" }));
  }
};

const http = require("http");
const https = require("https");
const url = require("url");
const hostname = "127.0.0.1";
const port = 3001;

module.exports = http
  .createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);

    if (reqUrl.pathname.includes("/restaurants") && req.method === "GET") {
      const postCode = reqUrl.pathname?.split('/')?.pop();

      let data = "";
        https.get(
          "https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/" + postCode,
          (response) => {
            response.on('data', function (chunk) {
              data = data + chunk;
            });

            response.on('end', () => {
              res.statusCode = 200;
              res.write(data);
              res.end();
            });
          }
        );
    }
  })
  .listen(port, hostname, () => {
    console.log("Server running at http://" + hostname + ":" + port + "/");
  });
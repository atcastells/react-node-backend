import app from "./app";

const url = process.env.URL || "http://localhost";
const port = process.env.PORT || 3001;

const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};
https
  .createServer(
    {
      cert: options.cert,
      key: options.key,
    },
    app
  )
  .listen(port, () => {
    console.log("Server working on https in port: " + port);
  });

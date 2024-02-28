require("dotenv").config();
require("./config/dbConnect");

const http = require("http");
const app = require("./app/app");


const PORT = process.env.PORT || 3000;
//server
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

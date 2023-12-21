const express = require("express");
const { PORT } = require("./config/serverConfig");
const setupAndStartServer = async () => {
  //creating express object
  const app = express();
  app.listen(PORT, () => {
    console.log(`started server at ${PORT}`);
  });
};
setupAndStartServer();

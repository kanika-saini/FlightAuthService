const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");
// const UserRepository = require("./repository/user-repository");
const UserService = require("./services/user-service");
const setupAndStartServer = async () => {
  //creating express object
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  app.listen(PORT, async () => {
    console.log(`started server at ${PORT}`);
    // const service = new UserService();
    // const newToken = service.createToken({ email: "kanika@gmail.com", id: 1 });
    // console.log("new token is", newToken);
    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthbmlrYUBnbWFpbC5jb20iLCJpZCI6MSwiaWF0IjoxNzAzOTMyNzkwLCJleHAiOjE3MDM5MzI4MjB9.xQffey0H1Pqr6925jRM69pVsXHMmIZct7RnPza-hCpw";
    // const response = service.verifyToken(token, "auth");
    // console.log(response);
  });
};
setupAndStartServer();

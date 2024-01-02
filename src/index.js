const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");
const db = require("./models/index");
// const { User, Role } = require("./models/index");
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
    if (process.env.DB_SYNC) {
      db.sequelize.sync({ alter: true });
    }
    // const u1 = await User.findByPk(4);
    // const r1 = await Role.findByPk(2);
    // u1.addRole(r1);
  });
};
setupAndStartServer();

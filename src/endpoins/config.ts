const express = require("express");

const initConfig = () => {
  const app = express();
  const port = 8089;

  app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
  });

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  });

  app.use(express.json());

  return app;
};

module.exports = { initConfig };

const sql = require("sqlite3").verbose();

const initializeDB = () => {
  const db = new sql.Database("memory", err => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the SQLite database");
  });

  /*  const createUserTable =
    "create table users (id integer not null primary key, firstName VARCHAR(255) not null, lastName VARCHAR(255) not null, favourite_movies VARCHAR(255) not null);";

  db.run(createUserTable, err => {
    if (err) {
      console.error(err);
    } else {
      console.log("table created successfully");
      const fillUserTable =
        "INSERT INTO users (id, firstName,lastName, favourite_movies) VALUES (1,'Anona','Cruz','tt0848228,tt4154756,tt2395427,tt4154796'), (2,'Camilla','Sayer','tt4154756,tt10515848,tt0120575'), (3,'Ganesh','Zentai','tt0287871,tt2975590,tt0103776,tt4116284,tt2313197')";

      db.run(fillUserTable, err => {
        if (err) {
          console.error(err);
        } else console.log("table filled successfully");
      });
    }
  });

  const createLoginTable =
    "create table auth (userId integer not null, login VARCHAR(255) not null, password VARCHAR(255) not null, token VARCHAR(255) not null, foreign key (userId) references users (id));";

  db.run(createLoginTable, err => {
    if (err) {
      console.error(err);
    } else {
      console.log("login table created successfully");
      const fillLoginTable =
        "INSERT INTO auth (userId, login, password, token) VALUES (1,'tolya.kravtsov.1@gmail.com','Qwerty12345','qwertyu123asdnvjXXX13'), (2,'Hello@mail','Qwerty12345','qwertyuio'), (3,'DartVeider','No','zxcvbnm')";

      db.run(fillLoginTable, err => {
        if (err) {
          console.error(err);
        } else console.log("login table filled successfully");
      });
    }
  });*/

  return db;
};

module.exports = { initializeDB };

const db = require("./database");
const appConfig = require("./endpoins/config");

const database = db.initializeDB();
const app = appConfig.initConfig();

app.get("/favoriteMovies", (req, res) => {
  const { token } = req.query;

  if (!token) {
    return res.status(400).json({
      message: "token not provided",
    });
  }

  const getFavoriteMoviesQuery = `SELECT favourite_movies FROM users INNER JOIN auth WHERE users.id = auth.userId AND '${token}' = auth.token`;
  database.get(getFavoriteMoviesQuery, [], (err, rows) => {
    if (err) {
      console.log(err.message);
    }
    res.json(rows);
  });
});

app.post("/auth", (req, res) => {
  const { login, password } = req.body;
  if (!login || !password) {
    return res.status(400).json({
      message: "Username or Password not present",
    });
  }

  const checkPasswordQuery = `SELECT token FROM auth WHERE login = '${login}' AND password = '${password}'`;
  database.get(checkPasswordQuery, (err, rows) => {
    if (err) {
      console.log(err.message);
      return res.status(500).json({
        message: "The email address you entered is not associated with any account.",
      });
    }
    res.json(rows);
  });
});

app.put("/updateFavorite", (req, res) => {
  const { token, favorites } = req.body;

  if (!token) {
    return res.status(400).json({
      message: "token not provided",
    });
  }

  const updateFavoriteQuery = `UPDATE users SET favourite_movies = '${favorites}' from auth WHERE users.id = auth.userId AND '${token}' = auth.token`;
  database.get(updateFavoriteQuery, [], (err, rows) => {
    if (err) {
      console.log(err.message);
    }
    res.json({
      message: "Updated Success",
    });
  });
});

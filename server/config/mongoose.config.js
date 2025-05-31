const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/productManager")
  .then(() => console.log("Database is firedUpp!"))
  .catch((err) =>
    console.log("Somtheing went wrong when connecting to the database", err)
  );

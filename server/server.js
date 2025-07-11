const express = require("express");
const cors = require("cors");
const app = express();
require("./config/mongoose.config");

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

const AllProductRoutes = require("./routes/product.routes");
AllProductRoutes(app);

app.listen(8000, () => console.log("The server is fired up pn port 8000"));

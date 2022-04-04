const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3001;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get("/", (_req, res) => {
	res.send({text: "Hello World"});
});

// Server
app.use(cors());
app.use(express.json());
app.use(express.static("src"));
app.listen(PORT, () => {
	console.log("app is running on port 3001");
});

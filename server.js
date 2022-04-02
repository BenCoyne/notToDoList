import express from "express";
import cors from "cors";
const app = express();
const PORT = 3001;

app.get("/", (_req, res) => {
	res.send("Hello World");
});

// Server
app.use(cors());
app.use(express.json());
app.use(express.static("src"));
app.listen(PORT, () => {
	console.log("app is running on port 3001");
});

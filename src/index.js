import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Welcome to repository-template 😎!");
});

app.listen(port, () => {
	console.log(`repository-template listening at http://localhost:${port}`);
});

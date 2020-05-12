const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const server = app.listen(PORT, () => {
	const host = server.address().address;
	const port = server.address().port;
	console.log(`Listening on ${host}:${port}`);
});


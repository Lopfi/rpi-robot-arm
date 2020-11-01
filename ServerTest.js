const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json);
app.use(express.json());

app.get("/", (req, res) => res.sendFile(path.join(__dirname, '/content', 'index.html')))

app.post("/setPulse", (req, res) => {
    console.log(req.query);
});

app.get("*", (req, res) => res.send("404"));

app.listen(3000, () => {
    console.log("App listening on 3000");
});
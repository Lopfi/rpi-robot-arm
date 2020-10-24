const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => res.sendFile(path.join(__dirname, '/content', 'index.html')))

app.get("*", (req, res) => res.send("404"));

app.listen(80, () => {
    console.log("App listening on 80");
});


/*app.get("/items", (req, res) => {
    let limit = req.query.limit;
    let offset = req.query.offset;
    res.send(JSON.stringify(response));
});*/
const express = require("express");
const app = express();
const path = require("path");
const pageContents = require("./config/PageContents.json")["page_contents"];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../client/views"));

app.get("/", (req, res) => {
    res.redirect("/page?p=1");
});

app.get("/page", (req, res) => {
    const { p } = req.query; //page number

    res.render("page", { contents: pageContents[p], buttonsCount: Object.keys(pageContents).filter(i => pageContents[i].length !== 0).length })
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/page_not_found.html"));
})


app.listen(80, () => console.log("Server listening"))
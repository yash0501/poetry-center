const express = require("express");
const app = express();

const config = require("./config");
console.log(config.db.connection);

app.set("view engine", "ejs");
app.use(express.static("public"));

const poems = [
    {
        title: "Farewell",
        poem: "It all ended that day...",
        author: "Yash Garg"
    }
]

app.get("/", (req, res)=>{
    res.send("App working fine till now");
})

app.get("/poems", (req, res)=>{
    res.render("poems", {poems});
})

app.listen(3000, ()=>{
    console.log("App listening to port 3000...");
})
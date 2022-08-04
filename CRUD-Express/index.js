import express from "express";
import router from "./src/routes/index.js";

// TODO: GitHub repo
// TODO: Nodemon

const app = express();
const port = 8080;
``
app.use(express.json());

app.use("/", router);

app.get("/", (req, res) => {
    res.send("Welcome  amazon");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

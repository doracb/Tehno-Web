import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

let app = express();
let router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

const array = [
    { id: 1, name: "Ionut", age: 25 },
    { id: 2, name: "Ana", age: 24 },
    { id: 3, name: "Mihai", age: 22 },
    { id: 4, name: "Bogdan", age: 29 },
    { id: 5, name: "Dora", age: 21 }
];

router.route("/getList").get((req, res) => {
    res.json(array);
});

router.route("/postList").post((req, res) => {
    let el = req.body;
    el.id = array.length + 1;
    array.push(el);
    res.json(el);
});

router.route("/getObj/:id").get((req, res) => {
    const objId = parseInt(req.params.id);
    const obj = array.find(x => x.id === objId);

    if (obj) {
        res.json(obj);
    }
    else {
        res.status(404).json({ message: "Resursa nu a fost gasitaaaaa" });
    }
});

let port = 8000;
app.listen(port);

console.log("API is running...");
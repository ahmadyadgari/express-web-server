import repo from './../db/techniquesRepo.js';

const printName = (req, res) => {
    const {fName, lName, nickname} = req.query;
    res.send(`Hello, ${fName} ${lName} ${nickname}!`);
}

const pageLoader = (req, res) => {
    const page = req.query.page;

    res.status(200);
    if (page === "page1") {
      res.send("Page #1");
    } else if (page === "page2") {
      res.send("Page #2");
    } else if (page === "page3") {
      res.send("Page #3");
    } else {
      res.send("Unknown page");
    }
}


const hello = (req, res) => {
    res.status(200);
    res.send("Hello, you!");
}

const addMessage = (req, res) => {
    res.status(200);
    res.send("<h1>Welcome!</h1>");
}

const course = (req, res) => {
    res.status(200);
    res.json({
        id: "SDEV 372",
        topic: "Cloud Computing With Microservices",
        credits: 5
    })
}

const unknown = (req, res) => {
    res.status(404);
    res.end();
}

const underwaterTechniques = (req, res) => {
    res.status(200);
    res.json(repo.getTechniques());
}

export default {
    hello,
    addMessage,
    course,
    unknown,
    underwaterTechniques,
    pageLoader,
    printName
}
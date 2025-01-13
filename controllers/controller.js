import repo from './../db/techniquesRepo.js';

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
    underwaterTechniques
}
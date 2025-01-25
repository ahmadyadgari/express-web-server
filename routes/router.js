import express from 'express';
import controller from './../controllers/controller.js'

const router = express.Router();

//add a simple route
router.get("/hello", controller.hello);
router.get("/addMessage", controller.addMessage);
router.get("/course", controller.course);
router.get("/unknown", controller.unknown);
router.get("/underwater/techniques", controller.underwaterTechniques);
router.get("/pages", controller.pageLoader);
router.get("/name", controller.printName);
// router.get("books/name", controller.bookName);
// router.get("books/details", controller.bookSummary);
// router.get("books/pages", controller.bookPages);
router.get("/books/:thing", controller.book);
router.get("/point/:x/:y/:z", controller.getPoints);


export default router;
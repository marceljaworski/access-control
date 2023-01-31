import { Router } from "express";
import checkRole from "../middlewares/checkRole.js";
import checkUserAccess from "../middlewares/checkUserAcces.js";


const router = Router();

router.post("/", /*checkRole(["Editor", "Admin"])*/ checkUserAccess("POST"), (req, res, next) => {
    res.status(201).end();
});
router.get("/", checkRole(["User"]), (req, res, next) => {
    res.json([]);
});
router.put("/:id", checkRole(["Editor", "Admin"]), (req, res, next) => {
    res.status(204).end();
});
router.delete("/:id", checkRole(["Admin"]), (req, res, next) => {
    res.status(204).end();
});

export default router;

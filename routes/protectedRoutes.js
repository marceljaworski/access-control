import { Router } from "express";
import checkRole from "../middlewares/checkRole.js";
import checkUserAccess from "../middlewares/checkUserAccess.js";


const router = Router();

router.post("/", /*checkRole(["Editor", "Admin"])*/ checkUserAccess("createFoto"), (req, res, next) => {
    res.status(201).end();
});
router.get("/", /*checkRole(["User"])*/checkUserAccess("permissions"), (req, res, next) => {
    res.json([]);
});
router.put("/:id", /*checkRole(["Editor", "Admin"])*/checkUserAccess("permissions"), (req, res, next) => {
    res.status(204).end();
});
router.delete("/:id", /*checkRole(["Admin"])*/checkUserAccess("permissions"), (req, res, next) => {
    res.status(204).end();
});

export default router;

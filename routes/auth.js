import { Router } from "express";
import token from "../lib/token.js";

const router = Router();

const users = [
    {
        id: 1,
        username: "user1",
        role: "User",
        access: ["GET"]
    },
    {
        id: 2,
        username: "user2",
        role: "Admin",
        access: ["GET", "PUT", "DELETE"]
    },
    {
        id: 3,
        username: "user3",
        role: "Editor",
        access: ["POST"]
    },
    {
        id: 4,
        username: "user4",
        role: "User",
        access: ["GET", "POST", "PUT"]
    },
];

router.post("/login", (req, res, next) => {
    try{
        const user = users.find(user => user.username === req.body.username);
        if (!user) return res.status(401).end();
        const userToken = token.signToken({ id: user.id, role: user.role, access: user.access });
        res.json(userToken);
    }catch(error){
        console.error(error)
    }
});



export default router;

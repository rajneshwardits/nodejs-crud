import express from "express";
import * as user from "../controllers/users.js"
const router = express.Router();
import validationMiddleware from "../validators/joi.validator.js";

// User CRUD
router.get("/", (req, res, next) => validationMiddleware(req, res, next, "listing"),  user.userList)
router.post("/",(req, res, next) => validationMiddleware(req, res, next, "user"), user.userAdd)
router.put("/:id", (req, res, next) => validationMiddleware(req, res, next, "user"), user.userUpdate)
router.delete("/:id", user.userDelete)

router.post("/login",(req, res, next) => validationMiddleware(req, res, next, "login"), user.login)


export default router


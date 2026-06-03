import express from "express";
import { login, logout, signUp } from "../controllers/auth.controller.js";

const authRoutes = express.Router();

authRoutes.get("/signup", signUp);
authRoutes.get("/login", login);
authRoutes.get("/logout", logout);

export default authRoutes;

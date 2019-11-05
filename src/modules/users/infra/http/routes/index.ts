import express from "express";
import { middleware } from "../../../../../shared/infra/http";
import { createUserController } from "../../../useCases/createUser";
import { deleteUserController } from "../../../useCases/deleteUser";
import { getCurrentUserController } from "../../../useCases/getCurrentUser";
import { getUserByUserNameController } from "../../../useCases/getUserByUserName";
import { loginController } from "../../../useCases/login";

const userRouter = express.Router();

userRouter.post("/", (req, res) => createUserController.execute(req, res));

userRouter.get("/me", middleware.authenticateRequests(), (req, res) => getCurrentUserController.execute(req, res));

userRouter.post("/login", (req, res) => loginController.execute(req, res));

userRouter.delete("/:userId", (req, res) => deleteUserController.execute(req, res));

userRouter.get("/:username", (req, res) => getUserByUserNameController.execute(req, res));

export { userRouter };

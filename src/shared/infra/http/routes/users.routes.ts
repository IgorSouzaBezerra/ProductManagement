import { Router } from "express";

import { CreateUserController } from "../../../../modules/users/services/createUser/CreateUserController";
import { ListUsersController } from "../../../../modules/users/services/listUsers/ListUsersController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", listUsersController.handle);

export { userRoutes };

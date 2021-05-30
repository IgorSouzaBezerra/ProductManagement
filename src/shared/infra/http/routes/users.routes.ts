import { Router } from "express";

import { CreateUserController } from "../../../../modules/users/services/createUser/CreateUserController";
import { ListUsersController } from "../../../../modules/users/services/listUsers/ListUsersController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureIsManager } from "../middlewares/ensurerIsManager";

const userRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

userRoutes.post("/", createUserController.handle);

userRoutes.use(ensureAuthenticated, ensureIsManager);

userRoutes.get("/", listUsersController.handle);

export { userRoutes };

import { Router } from "express";

import { CreateRoleController } from "../../../../modules/users/services/createRole/CreateRoleController";

const roleRoutes = Router();

const createRoleController = new CreateRoleController();

roleRoutes.post("/", createRoleController.handle);

export { roleRoutes };

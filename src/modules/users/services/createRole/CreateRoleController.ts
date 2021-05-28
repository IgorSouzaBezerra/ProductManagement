import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateRoleService } from "./CreateRoleService";

class CreateRoleController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { description } = request.body;
    const createRoleService = container.resolve(CreateRoleService);

    const role = await createRoleService.execute(description);

    return response.status(201).json(role);
  }
}

export { CreateRoleController };

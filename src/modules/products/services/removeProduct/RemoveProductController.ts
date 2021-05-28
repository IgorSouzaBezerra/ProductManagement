import { Request, Response } from "express";
import { container } from "tsyringe";

import { RemoveProductService } from "./RemoveProductService";

class RemoveProductController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const removeProductService = container.resolve(RemoveProductService);

    await removeProductService.execute(id);

    return response.status(204).send();
  }
}

export { RemoveProductController };

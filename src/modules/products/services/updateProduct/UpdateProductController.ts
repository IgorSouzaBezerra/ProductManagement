import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateProductService } from "./UpdateProductService";

class UpdateProductController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { _id, name, category, amount, value, available } = request.body;

    const updateProductService = container.resolve(UpdateProductService);

    const product = await updateProductService.execute({
      _id,
      name,
      category,
      amount,
      value,
      available,
    });

    return response.json(product);
  }
}

export { UpdateProductController };

import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProductService } from "./CreateProductService";

class CreateProductController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, category, amount, value } = request.body;

    const createProductService = container.resolve(CreateProductService);

    const product = await createProductService.execute({
      name,
      category,
      amount,
      value,
    });

    return response.status(201).json(product);
  }
}

export { CreateProductController };

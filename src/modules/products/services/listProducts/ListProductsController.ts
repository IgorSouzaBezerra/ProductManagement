import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListProductsService } from "./ListProductsService";

class ListProductsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { page } = request.query;
    const listProductsService = container.resolve(ListProductsService);

    const products = await listProductsService.execute(Number(page));

    return response.json(products);
  }
}

export { ListProductsController };

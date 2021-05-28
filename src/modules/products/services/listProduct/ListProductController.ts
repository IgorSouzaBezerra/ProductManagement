import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListProductService } from "./ListProductService";

class ListProductController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { name } = request.query;

    const listProductService = container.resolve(ListProductService);

    const product = await listProductService.execute(String(name));

    return response.json(product);
  }
}

export { ListProductController };

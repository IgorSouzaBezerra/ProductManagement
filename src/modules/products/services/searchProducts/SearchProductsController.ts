import { Request, Response } from "express";
import { container } from "tsyringe";

import { SearchProductsService } from "./SearchProductsService";

class SearchProductsController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { name } = request.query;

    const searchProductsService = container.resolve(SearchProductsService);

    const product = await searchProductsService.execute(String(name));

    return response.json(product);
  }
}

export { SearchProductsController };

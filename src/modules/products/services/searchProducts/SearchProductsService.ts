import { inject, injectable } from "tsyringe";

import { IProduct } from "../../infra/mongo/entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class SearchProductsService {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  public async execute(name: string): Promise<IProduct[] | null> {
    const product = await this.productsRepository.searchByName(name);

    return product;
  }
}

export { SearchProductsService };

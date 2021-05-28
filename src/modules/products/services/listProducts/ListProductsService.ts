import { inject, injectable } from "tsyringe";

import { IProduct } from "../../infra/mongo/entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class ListProductsService {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  public async execute(page: number): Promise<IProduct[]> {
    const products = this.productsRepository.list(page);
    return products;
  }
}

export { ListProductsService };

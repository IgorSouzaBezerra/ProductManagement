import { inject, injectable } from "tsyringe";

import { ICreateProductDTO } from "../../dto/ICreateProductDTO";
import { IProduct } from "../../infra/mongo/entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class CreateProductService {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  public async execute({
    name,
    category,
    amount,
    value,
    available,
  }: ICreateProductDTO): Promise<IProduct> {
    const product = await this.productsRepository.create({
      name,
      category,
      amount,
      value,
      available,
    });
    return product;
  }
}

export { CreateProductService };

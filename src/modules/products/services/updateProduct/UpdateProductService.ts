import { inject, injectable } from "tsyringe";

import { IUpdateProductDTO } from "../../dto/IUpdateProductDTO";
import { IProduct } from "../../infra/mongo/entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class UpdateProductService {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  public async execute({
    _id,
    name,
    category,
    amount,
    value,
  }: IUpdateProductDTO): Promise<IProduct | null> {
    const updateUser = this.productsRepository.update({
      _id,
      name,
      category,
      amount,
      value,
    });

    return updateUser;
  }
}

export { UpdateProductService };

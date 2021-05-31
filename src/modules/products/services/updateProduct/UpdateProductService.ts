import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
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
    available,
  }: IUpdateProductDTO): Promise<IProduct | null> {
    const productExist = await this.productsRepository.findById(_id);

    if (!productExist) {
      throw new AppError("Product isn't alredy exists");
    }

    this.productsRepository.update({
      _id,
      name,
      category,
      amount,
      value,
      available,
    });

    const newProduct = await this.productsRepository.findById(_id);

    return newProduct;
  }
}

export { UpdateProductService };

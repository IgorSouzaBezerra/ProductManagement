import { ICreateProductDTO } from "../../../dto/ICreateProductDTO";
import { IUpdateProductDTO } from "../../../dto/IUpdateProductDTO";
import { IProductsRepository } from "../../../repositories/IProductsRepository";
import Product, { IProduct } from "../entities/Product";

class ProductsRepository implements IProductsRepository {
  private limitPage = 5;
  private repository;

  constructor() {
    this.repository = Product;
  }

  public async create({
    name,
    category,
    amount,
    value,
    available,
  }: ICreateProductDTO): Promise<IProduct> {
    const product = await this.repository.create({
      name,
      category,
      amount,
      value,
      available,
    });

    return product;
  }

  public async update({
    _id,
    name,
    category,
    amount,
    value,
    available,
  }: IUpdateProductDTO): Promise<IProduct | null> {
    const updatedProduct = await this.repository.findOneAndUpdate(
      { _id },
      { name, category, amount, value, available }
    );

    return updatedProduct;
  }

  public async remove(id: string): Promise<void> {
    await this.repository.deleteOne({ _id: id });
  }

  public async searchByName(name: string): Promise<IProduct[] | null> {
    const product = await this.repository.find({
      name: new RegExp(name, "i"),
    });

    return product;
  }

  public async list(page: number): Promise<IProduct[]> {
    const products = await this.repository
      .find({ available: true })
      .limit(this.limitPage)
      .skip(page * this.limitPage);

    return products;
  }
}

export { ProductsRepository };

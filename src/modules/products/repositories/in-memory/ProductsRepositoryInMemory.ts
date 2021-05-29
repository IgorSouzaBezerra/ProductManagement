/* eslint-disable no-underscore-dangle */
import { ICreateProductDTO } from "../../dto/ICreateProductDTO";
import { IUpdateProductDTO } from "../../dto/IUpdateProductDTO";
import Product, { IProduct } from "../../infra/mongo/entities/Product";
import { IProductsRepository } from "../IProductsRepository";

class ProductsRepositoryInMemory implements IProductsRepository {
  private products: IProduct[] = [];

  public async create({
    name,
    category,
    amount,
    value,
    available,
  }: ICreateProductDTO): Promise<IProduct> {
    const product = new Product();

    Object.assign(product, {
      name,
      category,
      amount,
      value,
      available,
    });

    this.products.push(product);

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
    const productIndex = this.products.findIndex((p) => p._id === _id);

    const newProduct = {
      _id,
      name,
      category,
      amount,
      value,
      available,
      created_at: this.products[productIndex].created_at,
      __v: this.products[productIndex].__v,
    };

    this.products[productIndex] = newProduct;

    return newProduct;
  }

  public async remove(id: string): Promise<void> {
    const findIndex = this.products.findIndex((product) => product._id === id);
    this.products.splice(findIndex, 1);
  }

  public async searchByName(name: string): Promise<IProduct[] | null> {
    const product = this.products.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );

    return product;
  }

  public async list(pageActual: number): Promise<IProduct[]> {
    const result = [];
    const limitItems = 10;

    const totalPage = this.products.length;
    let count = pageActual * limitItems - limitItems;

    const delimiter = count + limitItems;

    if (pageActual <= totalPage) {
      for (let i = count; i < delimiter; i += 1) {
        result.push(this.products[i]);
        count += count;
      }
    }

    return result;
  }
}
export { ProductsRepositoryInMemory };

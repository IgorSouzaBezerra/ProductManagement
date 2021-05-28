import { IProductsRepository } from "../IProductsRepository";

class ProductsRepositoryInMemory implements IProductsRepository {
  private products = [];
  create(): void {
    throw new Error("Method not implemented.");
  }
  update(): void {
    throw new Error("Method not implemented.");
  }
  remove(): void {
    throw new Error("Method not implemented.");
  }
  findByName(): void {
    throw new Error("Method not implemented.");
  }
  findById(): void {
    throw new Error("Method not implemented.");
  }
  list(): void {
    throw new Error("Method not implemented.");
  }
}
export { ProductsRepositoryInMemory };

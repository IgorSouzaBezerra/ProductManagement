import { ICreateProductDTO } from "../dto/ICreateProductDTO";
import { IUpdateProductDTO } from "../dto/IUpdateProductDTO";
import { IProduct } from "../infra/mongo/entities/Product";

interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<IProduct>;
  update(product: IUpdateProductDTO): Promise<IProduct | null>;
  remove(id: string): Promise<void>;
  searchByName(name: string): Promise<IProduct[] | null>;
  findById(id: string): Promise<IProduct | undefined>;
  list(page: number): Promise<IProduct[]>;
}

export { IProductsRepository };

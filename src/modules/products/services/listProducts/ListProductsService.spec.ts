import { ProductsRepositoryInMemory } from "../../repositories/in-memory/ProductsRepositoryInMemory";
import { CreateProductService } from "../createProduct/CreateProductService";
import { ListProductsService } from "./ListProductsService";

let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createProductService: CreateProductService;
let listProductsService: ListProductsService;

describe("List Products", () => {
  beforeAll(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    createProductService = new CreateProductService(productsRepositoryInMemory);
    listProductsService = new ListProductsService(productsRepositoryInMemory);
  });

  it("should be able to list products", async () => {
    await createProductService.execute({
      name: "Product 1",
      category: "Product 1",
      amount: 10,
      value: 100,
      available: true,
    });

    await createProductService.execute({
      name: "Product 2",
      category: "Product 2",
      amount: 10,
      value: 100,
      available: true,
    });

    const result = await listProductsService.execute(1);

    expect(result.length).toEqual(2);
  });

  it("should be able to list products availables", async () => {
    await createProductService.execute({
      name: "Product 3",
      category: "Product 3",
      amount: 10,
      value: 100,
      available: true,
    });

    await createProductService.execute({
      name: "Product 4",
      category: "Product 4",
      amount: 10,
      value: 100,
      available: true,
    });

    await createProductService.execute({
      name: "No",
      category: "No",
      amount: 10,
      value: 100,
      available: false,
    });

    const result = await listProductsService.execute(1);

    expect(result.length).toEqual(4);
  });
});

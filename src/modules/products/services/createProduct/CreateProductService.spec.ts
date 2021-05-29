import { ProductsRepositoryInMemory } from "../../repositories/in-memory/ProductsRepositoryInMemory";
import { CreateProductService } from "./CreateProductService";

let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createProductService: CreateProductService;

describe("Create Product", () => {
  beforeAll(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    createProductService = new CreateProductService(productsRepositoryInMemory);
  });

  it("should be able to create a product", async () => {
    const product = await createProductService.execute({
      name: "Product 1",
      category: "Product 1",
      amount: 10,
      value: 100,
      available: true,
    });

    expect(product).toHaveProperty("id");
    expect(product).toHaveProperty("created_at");
  });
});

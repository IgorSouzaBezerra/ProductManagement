import { ProductsRepositoryInMemory } from "../../repositories/in-memory/ProductsRepositoryInMemory";
import { CreateProductService } from "../createProduct/CreateProductService";
import { SearchProductsService } from "./SearchProductsService";

let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createProductService: CreateProductService;
let searchProductsService: SearchProductsService;

describe("Search Product", () => {
  beforeAll(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    createProductService = new CreateProductService(productsRepositoryInMemory);
    searchProductsService = new SearchProductsService(
      productsRepositoryInMemory
    );
  });

  it("should be able to search a products by name", async () => {
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

    const result = await searchProductsService.execute("product");
    const result2 = await searchProductsService.execute("product 1");
    const resul3 = await searchProductsService.execute("AHSUAHUAEUH");

    expect(result?.length).toEqual(2);
    expect(result2?.length).toEqual(1);
    expect(resul3?.length).toEqual(0);
  });
});

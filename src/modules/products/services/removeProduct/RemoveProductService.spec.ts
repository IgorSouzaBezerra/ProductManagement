import { AppError } from "../../../../shared/errors/AppError";
import { ProductsRepositoryInMemory } from "../../repositories/in-memory/ProductsRepositoryInMemory";
import { CreateProductService } from "../createProduct/CreateProductService";
import { ListProductsService } from "../listProducts/ListProductsService";
import { RemoveProductService } from "./RemoveProductService";

let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createProductService: CreateProductService;
let removeProductService: RemoveProductService;
let listProductsService: ListProductsService;

describe("Remove Product", () => {
  beforeAll(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    createProductService = new CreateProductService(productsRepositoryInMemory);
    removeProductService = new RemoveProductService(productsRepositoryInMemory);
    listProductsService = new ListProductsService(productsRepositoryInMemory);
  });

  it("should be able to remove product", async () => {
    const product = await createProductService.execute({
      name: "Product 1",
      category: "Product 1",
      amount: 10,
      value: 100,
      available: true,
    });

    const result = await listProductsService.execute(0);

    expect(result.length).toEqual(1);

    await removeProductService.execute(product._id);
    const result2 = await listProductsService.execute(0);

    expect(result2.length).toEqual(0);
  });

  it("should not be able to remove product non-exists", () => {
    expect(async () => {
      await removeProductService.execute("error");
    }).rejects.toEqual(new AppError("Product isn't alredy exists"));
  });
});

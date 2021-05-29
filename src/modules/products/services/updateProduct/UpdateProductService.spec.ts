import { ProductsRepositoryInMemory } from "../../repositories/in-memory/ProductsRepositoryInMemory";
import { CreateProductService } from "../createProduct/CreateProductService";
import { UpdateProductService } from "./UpdateProductService";

let productsRepositoyInMemory: ProductsRepositoryInMemory;
let createProductService: CreateProductService;
let updateProductService: UpdateProductService;

describe("Update User", () => {
  beforeAll(() => {
    productsRepositoyInMemory = new ProductsRepositoryInMemory();
    createProductService = new CreateProductService(productsRepositoyInMemory);
    updateProductService = new UpdateProductService(productsRepositoyInMemory);
  });

  it("should be able to update Product", async () => {
    const product = await createProductService.execute({
      name: "Product 1",
      category: "Product 1",
      amount: 10,
      value: 100,
      available: true,
    });

    const productUpdate = await updateProductService.execute({
      _id: product._id,
      name: "Product Update",
      category: "Product Update",
      amount: 10,
      value: 100,
      available: true,
    });

    expect(productUpdate?.name).toEqual("Product Update");
    expect(productUpdate?.category).toEqual("Product Update");
  });
});

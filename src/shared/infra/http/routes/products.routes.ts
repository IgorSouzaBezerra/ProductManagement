import { Router } from "express";

import { CreateProductController } from "../../../../modules/products/services/createProduct/CreateProductController";
import { ListProductController } from "../../../../modules/products/services/listProduct/ListProductController";
import { ListProductsController } from "../../../../modules/products/services/listProducts/ListProductsController";
import { RemoveProductController } from "../../../../modules/products/services/removeProduct/RemoveProductController";
import { UpdateProductController } from "../../../../modules/products/services/updateProduct/UpdateProductController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureIsManager } from "../middlewares/ensurerIsManager";

const productsRoutes = Router();

const listProductsController = new ListProductsController();

const listProductController = new ListProductController();

const updateProductController = new UpdateProductController();
const createProductController = new CreateProductController();
const removeProductController = new RemoveProductController();

productsRoutes.get("/", listProductsController.handle);

productsRoutes.use(ensureAuthenticated, ensureIsManager);

productsRoutes.post("/", createProductController.handle);
productsRoutes.put("/", updateProductController.handle);
productsRoutes.get("/search", listProductController.execute);
productsRoutes.delete("/:id", removeProductController.handle);

export { productsRoutes };

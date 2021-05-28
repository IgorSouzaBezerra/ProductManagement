import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { productsRoutes } from "./products.routes";
import { roleRoutes } from "./roles.routes";
import { userRoutes } from "./users.routes";

const router = Router();

router.use("/products", productsRoutes);
router.use("/users", userRoutes);
router.use("/session", authenticateRoutes);
router.use("/role", roleRoutes);

export { router };

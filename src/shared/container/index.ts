import { container } from "tsyringe";

import "../../modules/users/providers/HashProvider";

import { ProductsRepository } from "../../modules/products/infra/mongo/repositories/ProductsRepository";
import { IProductsRepository } from "../../modules/products/repositories/IProductsRepository";
import { RoleRepository } from "../../modules/users/infra/mongo/repositories/RoleRepository";
import { UsersRepository } from "../../modules/users/infra/mongo/repositories/UsersRepository";
import { IRoleRepository } from "../../modules/users/repositories/IRolesRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";

container.registerSingleton<IRoleRepository>("RolesRepository", RoleRepository);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IProductsRepository>(
  "ProductsRepository",
  ProductsRepository
);

import { v4 } from "uuid";

import Role, { IRole } from "../../infra/mongo/entities/Role";
import { IRoleRepository } from "../IRolesRepository";

class RolesRepositoryInMemory implements IRoleRepository {
  private roles: IRole[] = [];

  public async create(description: string): Promise<IRole> {
    const role = new Role();

    Object.assign(role, {
      id: v4(),
      description,
    });

    this.roles.push(role);

    return role;
  }
  public async all(): Promise<IRole[]> {
    return this.roles;
  }
}

export { RolesRepositoryInMemory };

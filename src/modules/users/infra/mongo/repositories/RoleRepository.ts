import { IRoleRepository } from "../../../repositories/IRolesRepository";
import Role, { IRole } from "../entities/Role";

class RoleRepository implements IRoleRepository {
  private repository;

  constructor() {
    this.repository = Role;
  }

  public async create(description: string): Promise<IRole> {
    const role = await this.repository.create({ description });
    return role;
  }
  public async all(): Promise<IRole[]> {
    const roles = await this.repository.find();
    return roles;
  }
}

export { RoleRepository };

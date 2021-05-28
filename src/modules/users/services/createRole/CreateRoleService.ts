import { inject, injectable } from "tsyringe";

import { IRole } from "../../infra/mongo/entities/Role";
import { IRoleRepository } from "../../repositories/IRolesRepository";

@injectable()
class CreateRoleService {
  constructor(
    @inject("RolesRepository")
    private rolesRepository: IRoleRepository
  ) {}

  public async execute(description: string): Promise<IRole> {
    const role = await this.rolesRepository.create(description);
    return role;
  }
}

export { CreateRoleService };

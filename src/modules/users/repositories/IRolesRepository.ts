import { IRole } from "../infra/mongo/entities/Role";

interface IRoleRepository {
  create(description: string): Promise<IRole>;
  all(): Promise<IRole[]>;
}

export { IRoleRepository };

import { RolesRepositoryInMemory } from "../../repositories/in-memory/RolesRepositoryInMemory";
import { CreateRoleService } from "./CreateRoleService";

let rolesRepositoryInMemory: RolesRepositoryInMemory;
let createRoleService: CreateRoleService;

describe("Create Role", () => {
  beforeAll(() => {
    rolesRepositoryInMemory = new RolesRepositoryInMemory();
    createRoleService = new CreateRoleService(rolesRepositoryInMemory);
  });

  it("should be able to create role", async () => {
    const role = await createRoleService.execute("Role");
    expect(role).toHaveProperty("id");
  });
});

import BCryptHashProvider from "../../providers/HashProvider/implementations/BCryptHashProvider";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserService } from "../createUser/CreateUserService";
import { ListUsersService } from "./ListUsersService";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let listUsersService: ListUsersService;
let createUserService: CreateUserService;
let hashProvider: BCryptHashProvider;

describe("List Users", () => {
  beforeAll(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    hashProvider = new BCryptHashProvider();
    createUserService = new CreateUserService(
      usersRepositoryInMemory,
      hashProvider
    );
    listUsersService = new ListUsersService(usersRepositoryInMemory);
  });

  it("should be able to list users", async () => {
    await createUserService.execute({
      name: "Ricky Dean",
      email: "onepu@namukug.mq",
      password: "2158226742",
      role: "123",
    });

    const users = await listUsersService.execute();

    expect(users.length).toEqual(1);
  });
});

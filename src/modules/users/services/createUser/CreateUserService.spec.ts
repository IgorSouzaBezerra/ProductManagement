import { AppError } from "../../../../shared/errors/AppError";
import BCryptHashProvider from "../../providers/HashProvider/implementations/BCryptHashProvider";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserService } from "./CreateUserService";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserService: CreateUserService;
let hashProvider: BCryptHashProvider;

describe("Create User", () => {
  beforeAll(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    hashProvider = new BCryptHashProvider();
    createUserService = new CreateUserService(
      usersRepositoryInMemory,
      hashProvider
    );
  });

  it("should be able to create user", async () => {
    const user = await createUserService.execute({
      name: "Ricky Dean",
      email: "onepu@namukug.mq",
      password: "2158226742",
      role: "123",
    });

    expect(user).toHaveProperty("id");
  });

  it("should not be possible to create users with the same email", () => {
    expect(async () => {
      await createUserService.execute({
        name: "Ricky Dean",
        email: "onepu@namukug.mq",
        password: "2158226742",
        role: "123",
      });
      await createUserService.execute({
        name: "Ricky Dean",
        email: "onepu@namukug.mq",
        password: "2158226742",
        role: "123",
      });
    }).rejects.toEqual(new AppError("User already exists!", 409));
  });
});

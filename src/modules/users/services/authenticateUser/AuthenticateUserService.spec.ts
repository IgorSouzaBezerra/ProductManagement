import { AppError } from "../../../../shared/errors/AppError";
import BCryptHashProvider from "../../providers/HashProvider/implementations/BCryptHashProvider";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserService } from "../createUser/CreateUserService";
import { AuthenticateUserService } from "./AuthenticateUserService";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let hashProvider: BCryptHashProvider;
let createUserService: CreateUserService;
let authenticateUserService: AuthenticateUserService;

describe("Authenticate User", () => {
  beforeAll(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    hashProvider = new BCryptHashProvider();
    createUserService = new CreateUserService(
      usersRepositoryInMemory,
      hashProvider
    );
    authenticateUserService = new AuthenticateUserService(
      usersRepositoryInMemory,
      hashProvider
    );
  });

  it("should be able to authenticate an user", async () => {
    await createUserService.execute({
      name: "Edna Ross",
      email: "penkek@datkos.me",
      password: "2158226742",
      role: "123",
    });

    const result = await authenticateUserService.execute(
      "penkek@datkos.me",
      "2158226742"
    );

    expect(result).toHaveProperty("token");
  });

  it("should not be able to authenticate with incorrect password", () => {
    expect(async () => {
      const user = await createUserService.execute({
        name: "Henry Gill",
        email: "hazoje@ogodumgi.au",
        password: "2158226742",
        role: "123",
      });

      await authenticateUserService.execute(user.email, "fake");
    }).rejects.toEqual(new AppError("Email or password incorrect!"));
  });

  it("should not be able to authenticate an nonexisting user", () => {
    expect(async () => {
      await authenticateUserService.execute("fake@fake.com", "fake");
    }).rejects.toEqual(new AppError("Email or password incorrect!", 401));
  });
});

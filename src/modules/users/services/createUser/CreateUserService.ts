import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { IUser } from "../../infra/mongo/entities/User";
import { IHashProvider } from "../../providers/HashProvider/IHashProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}

  public async execute({
    name,
    email,
    password,
    role,
  }: ICreateUserDTO): Promise<IUser> {
    const userExists = await this.usersRepository.findByEmail(email);

    if (userExists) {
      throw new AppError("User already exists!", 409);
    }

    const passwordHash = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      role,
    });

    return user;
  }
}

export { CreateUserService };

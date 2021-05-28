import { inject, injectable } from "tsyringe";

import { IUser } from "../../infra/mongo/entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class ListUsersService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  public async execute(): Promise<IUser[]> {
    const users = await this.usersRepository.list();
    return users;
  }
}

export { ListUsersService };

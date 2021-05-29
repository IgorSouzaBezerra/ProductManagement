import { v4 } from "uuid";

import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import User, { IUser } from "../../infra/mongo/entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  private users: IUser[] = [];

  public async create({
    name,
    email,
    password,
    role,
  }: ICreateUserDTO): Promise<IUser> {
    const user = new User();

    Object.assign(user, {
      id: v4(),
      name,
      email,
      password,
      role,
      created_at: new Date(),
    });

    this.users.push(user);

    return user;
  }

  public async list(): Promise<IUser[]> {
    return this.users;
  }

  public async findById(id: string): Promise<IUser | null> {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      return null;
    }

    return user;
  }

  public async findByEmail(email: string): Promise<IUser | null> {
    const user = this.users.find((user) => user.email === email);

    if (!user) {
      return null;
    }

    return user;
  }
}

export { UsersRepositoryInMemory };

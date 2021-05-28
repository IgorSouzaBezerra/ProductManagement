import { ICreateUserDTO } from "../../../dto/ICreateUserDTO";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import User, { IUser } from "../entities/User";

class UsersRepository implements IUsersRepository {
  private repository;

  constructor() {
    this.repository = User;
  }

  public async create({
    name,
    email,
    password,
    role,
  }: ICreateUserDTO): Promise<IUser> {
    const user = await this.repository.create({
      name,
      email,
      password,
      role,
    });
    return user;
  }
  public async list(): Promise<IUser[]> {
    const users = await this.repository.find().populate("role");
    return users;
  }

  public async findById(id: string): Promise<IUser | null> {
    const user = await this.repository.findOne({ _id: id }).populate("role");

    return user;
  }

  public async findByEmail(email: string): Promise<IUser | null> {
    const user = await this.repository.findOne({ email });
    return user;
  }
}

export { UsersRepository };

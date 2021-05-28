import { ICreateUserDTO } from "../dto/ICreateUserDTO";
import { IUser } from "../infra/mongo/entities/User";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<IUser>;
  list(): Promise<IUser[]>;
  findById(id: string): Promise<IUser | null>;
  findByEmail(email: string): Promise<IUser | null>;
}

export { IUsersRepository };

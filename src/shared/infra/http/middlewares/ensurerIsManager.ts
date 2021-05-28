import { NextFunction, Request, Response } from "express";

import { UsersRepository } from "../../../../modules/users/infra/mongo/repositories/UsersRepository";
import { AppError } from "../../../errors/AppError";

export async function ensureIsManager(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const { id } = request.user;
  const usersRepository = new UsersRepository();

  const user = await usersRepository.findById(id);

  if (!user) {
    throw new AppError("User  isn't already exists", 401);
  }

  try {
    if (user.role.description !== "Manager") {
      throw new AppError("Permission is missing!", 401);
    }

    return next();
  } catch {
    throw new AppError("Permission is missing!", 401);
  }
}

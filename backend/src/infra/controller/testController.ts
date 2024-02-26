// src/users/usersController.ts
import { Controller, Get, Path, Route } from "tsoa";

@Route("test")
export class UsersController extends Controller {
  @Get("{param}")
  public async getUser(@Path() param: number): Promise<string> {
    return `Hello ${param}`;
  }
}

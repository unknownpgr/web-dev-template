// src/users/usersController.ts
import { Controller, Get, Path, Route } from "tsoa";

@Route("test")
export class UsersController extends Controller {
  @Get("{param}")
  public async testApi(@Path() param: number): Promise<string> {
    return `PARAM=${param}`;
  }
}

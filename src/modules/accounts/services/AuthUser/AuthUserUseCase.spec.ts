import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthUserUseCase } from "./AuthUserUseCase";

let usersRepositoryInMemory: IUsersRepository;
let authUserUseCase: AuthUserUseCase;
let createUserUseCase: CreateUserUseCase;

describe("Auth User Use Case", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        authUserUseCase = new AuthUserUseCase(usersRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    });
    it("Should be able to auth a user", async () => {
        const newUser: ICreateUserDTO = {
            email: "teste@gmail.com",
            job: "Guardião Real",
            name: "Manubas",
            password: "123456",
            phone: "71992126361"
        }
        console.log('newUser', newUser);
        await createUserUseCase.execute(newUser);
        const authenticated = await authUserUseCase.execute({
            email: newUser.email,
            password: newUser.password
        })
        console.log('authenticated', authenticated)
        expect(authenticated).toHaveProperty("token");
    })
})
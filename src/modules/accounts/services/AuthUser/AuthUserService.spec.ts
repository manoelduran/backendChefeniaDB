import { CreateUserDTO } from "@modules/accounts/dtos/CreateUserDTO";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { CreateUserService } from "@modules/accounts/services/CreateUser/CreateUserService";
import { AuthUserService } from "@modules/accounts/services/AuthUser/AuthUserService";
import { left, right } from "@shared/either";


let usersRepositoryInMemory: IUsersRepository;
let authUserService: AuthUserService;
let createUserService: CreateUserService;

describe("Auth User Use Case", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        authUserService = new AuthUserService(usersRepositoryInMemory);
        createUserService = new CreateUserService(usersRepositoryInMemory);
    });
    it("Should be able to auth a user", async () => {
        const newUser: CreateUserDTO = {
            email: "teste@gmail.com",
            job: "Guardião Real",
            name: "Manubas",
            password: "123456",
            phone: "71992126361"
        }
        console.log('newUser', newUser);
        await createUserService.execute(newUser);
        const authenticatedOrError = await authUserService.execute({
            email: newUser.email,
            password: newUser.password
        })
        if(authenticatedOrError.isLeft()) {
            return left(authenticatedOrError.value);
        };

        console.log('authenticatedOrError', authenticatedOrError.value)
        expect(right(authenticatedOrError.value).value).toHaveProperty("token");
    })
})
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";

import { AppError } from "@shared/errors/AppError";
import { CreateUserService } from "./CreateUserService";




let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserService: CreateUserService;

describe('Create User Use Case', () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        createUserService = new CreateUserService(usersRepositoryInMemory);
    })
    it("Should be able to create a new user", async () => {
        const newUser = {
            email: 'manoel.duran@gmail.com',
            job: 'Royal Guard',
            name: 'Manoel Duran',
            password: '123456',
            phone: '71992126361'
        };
        await  createUserService.execute(newUser)
        console.log('newUser', newUser)
        expect(newUser).toHaveProperty("email");
    });
    
    it("Should not be able to create a user when exists another user with the same email", async () => {
        await expect(async () => {
            await createUserService.execute({
                email: 'manoel.duran@hotmail.com',
                job: 'Royal Guard',
                name: 'Manoel Duran',
                password: '123456',
                phone: '71992126361'
            });
            await createUserService.execute({
                email: 'manoel.duran@hotmail.com',
                job: 'Royal Guard',
                name: 'Manoel Duran',
                password: '123456',
                phone: '71992126361'
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
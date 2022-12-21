interface CreateUserDTO {
    email: string;
    password: string;
    avatar?: string;
    job: string;
    phone: string;
    name: string;
};

export { CreateUserDTO };
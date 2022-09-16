interface ICreateUserDTO {
    id?: string;
    email: string;
    password: string;
    avatar?: string;
    job: string;
    phone: string;
    name: string;
};

export { ICreateUserDTO };
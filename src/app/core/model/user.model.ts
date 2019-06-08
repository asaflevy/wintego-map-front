

export interface ICreateUserInput {
    firstName: string;
    lastName: string;
}

export interface IUser extends ICreateUserInput {
    _id: string;
}

export interface AdminLoginInterface {
    email: string,
    password: string
}

export interface UserLoginInterface {
    email: string,
    password: string
}

export interface AdminsIgnupInterface {
    first_name: string,
    last_name: string,
    email: string,
    password: string
}

export interface UsersIgnupInterface {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    referralCode: string
}

export interface IErrorResponse {
    message: string;
    response: {
        data: {
            error: {
                message: string
            };
            message: string;
        };
    };
}
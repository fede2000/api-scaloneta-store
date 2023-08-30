export type AuthLogin = {
    email: string;
    password: string;
}

export type AuthSignIn ={
    id?: string;
    name: string;
    email: string;
    password: string;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}

export type AuthResponse ={
    userId?: string;
    token: string;
    expireIn: string;
    name: string;
    email: string;
    password?: string;
}
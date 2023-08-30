
export interface UserAddress{
    id: string;
    street: string;
    number: string;
    zipCode: string;
    city: string;
    created_at: Date;
    updated_at: Date;
    userId: number;
}

export interface User{
    id: number;
    emain: string;
    name: string;
    role: number;
    password: string;
    createdAt: Date;
    updatedAt: Date;

}
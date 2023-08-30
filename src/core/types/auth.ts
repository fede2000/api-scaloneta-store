export type loginResponse = {accessToken:string,refreshToken:string}

export type RoleDto = {
    roleId: number;
    roleName: string;
}

export type AuthSignIn = {
    name: string;
    email: string;
    password: string;
    roleId: number;
}

export type AuthDto = {
    userId: string;
    name: string;
    email: string;
    token: string;
    expiresIn: string;
    role: RoleDto;
  }


  export type UserDto = {
    userId: string;
    name: string;
    email: string;
    role: RoleDto;
  }
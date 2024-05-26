export interface Privilege {
    privilegeId: number;
    name: string;
    description: string;
  }
  
  export interface Position {
    positionId: number;
    name: string;
    description: string;
    privileges: Privilege[];
  }
  
  export interface UserRole{
    personId: number;
    identificationNumber: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    positions: Position[];
  }
  
  export interface UpdateRolePayload {
    roleIds: number[];
  }

  export interface User {
    idType: string,
    idNumber: string,
    firstName: string,
    lastName: string,
    genre: string,
    birthDate: string,
    phoneNumber: string,
    country: string,
    province: string,
    city: string,
    address: string,
    email: string,
    password: string
  }
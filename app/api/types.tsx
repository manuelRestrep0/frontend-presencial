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
  
  export interface User {
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

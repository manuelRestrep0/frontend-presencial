import apiClient from './apiClient';
import { User, UpdateRolePayload, UserRole } from './types';


export const resetPassword = async (newPassword:string) => {
  try {
    const response = await apiClient.patch('/password/reset', newPassword);
    return response.data;
  } catch (error) {
    console.error('Error setting the new password:', error);
    throw error;
  }
};


export const getUsersRoles = async () : Promise<UserRole[]>=> {

  try {
    const response = await apiClient.get('/usersroles');
    return response.data;
  } catch (error) {
    console.error('Error getting the Users roles list', error);
    throw error;
  }
}

export const updateRole = async (personId: number, roleIds:any) => {
  try { 
    const response = await apiClient.patch(`/usersroles/${personId}`,roleIds);
    return response.data;
  } catch (error) {
    console.error('Error updating the user role:', error);
    throw error;
  }
};


export const getUserinfo = async (personId: number) => {
  try {
    const response = await apiClient.get("/userinfo");
    return response.data;
  } catch (error) {
    console.error('Error getting the user info:', error);
    throw error;
  }
}

export const registerUser = async (user: User) => {
  try {
    const response = await apiClient.post('/register', user);
    return response.data;
  } catch (error) {
    console.error('Error registering the user:', error);
    throw error;
  }
}

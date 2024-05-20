import apiClient from './apiClient';
import { User, UpdatePrivilegePayload } from './types';


export const resetPassword = async (newPassword:string) => {
  try {
    const response = await apiClient.patch('/password/reset', newPassword);
    return response.data;
  } catch (error) {
    console.error('Error setting the new password:', error);
    throw error;
  }
};


export const getUsersRoles = async () : Promise<User[]>=> {

  try {
    const response = await apiClient.get('/usersroles');
    return response.data;
  } catch (error) {
    console.error('Error getting the Users roles list', error);
    throw error;
  }
}




import { baseUrl } from '../base/baseUrl';

export const registerUser = async (payload) => {
  const response = baseUrl.post('/registerUser', payload);
  return response;
};
export const loginUser = async (payload) => {
  const response = baseUrl.post('/loginUser', payload);
  return response;
};
export const logout = async (history) => {
  await baseUrl.get('/logoutUser');
  localStorage.removeItem('token');
};
// export const verifyuser = async (token) => {
//   const response = baseUrl.post(`/auth/user/verify?token=${token}`);
//   return response;
// };
export const forgetPassword = async (payload) => {
  const response = baseUrl.post('/auth/user/password-reset-url', payload);
  return response;
};
export const getUserDetails = async () => {
  const response = baseUrl.get(`auth/user/fetch-userDetails`);
  return response;
};

//Change/update password API request
export const updatePassword = async (payload, email) => {
  const response = baseUrl.patch(
    `/auth/user/update-password?email=${email}`,
    payload
  );
  return response;
};

//Update user profile API request
export const updateProfile = async (payload, id) => {
  const response = baseUrl.patch(`auth/user/edit-profile/:_${id}`, payload);
  return response;
};
//Post a house API request
export const post_House = async (payload) => {
  const response = baseUrl.post('/addHouse', payload);
  return response;
};
//View all houses API request
export const viewAllHouses = async () => {
  const response = baseUrl.get('/view-propertyDetails');
  return response;
};
//View a house detail API request
export const viewHouseDetail = async () => {
  const response = baseUrl.get('/viewHouse/');
  return response;
};
//Edit house API request
export const editHouse = async (payload, id) => {
  const response = baseUrl.patch(`/updateHouse?_id=${id}`, payload);
  return response;
};
//Delete house API request
export const deleteHouse = async (id) => {
  const response = baseUrl.delete(`/deleteHouse?_id=${id}`);
  return response;
};

import store from "../redux/Store";

export const getAccessToken = () => {
  const accessToken = localStorage.getItem("userToken");
  return accessToken || null;
};

// export const removeAccessToken = () => {
//   const refreshToken = localStorage.removeItem("userToken");
//   return refreshToken || "";
// };

// export const Allcode = () => {
//   const data = store.getState();
//   return data?.code;
// };
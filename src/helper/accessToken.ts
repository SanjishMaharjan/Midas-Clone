export const getAccessToken = (): string|null => {
  return localStorage.getItem('accessToken')
}


export const removeAccessToken = ():void => {
  localStorage.removeItem('accessToken')
}
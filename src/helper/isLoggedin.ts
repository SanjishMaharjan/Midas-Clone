export const isLoginRequest = (url: string | undefined): boolean => {
    return url ? url.includes('/login') : false;
  };
  
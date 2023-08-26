export const showLoginForm = () => {
  return {
    type: "LOGIN",
  };
};

export const showSignupForm = () => {
  return {
    type: "SIGNUP",
  };
};

export const showAuthPage = () => {
  return {
    type: "SHOW",
  };
};
export const hideAuthPage = () => {
  return {
    type: "HIDE",
  };
};

export const login = () => {
  return {
    type: "login",
  };
};

export const logout = () => {
  return {
    type: "logout",
  };
};

export const addtocart = (payload) => {
  return {
    type: "cart",
    payload,
  };
};

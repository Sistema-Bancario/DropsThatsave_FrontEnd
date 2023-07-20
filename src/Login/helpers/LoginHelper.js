
export const isUserAuthenticated = () => {
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
};

export const getUserRole = () => {
  const role = localStorage.getItem("role");
  return role || "";
};

export const isAdmin = () => {
  const role = getUserRole();
  return role === "ADMIN_ROLE";
};

export const isUser = () => {
  const role = getUserRole();
  return role === "USER_ROLE";
};


export const tieneTatuajes = () => {
  const tatuajes = localStorage.getItem("tatuajes");
  return tatuajes === "false";
};

export const tieneEnfermedad = () => {
  const enfermedad = localStorage.getItem("enfermedad");
  return enfermedad === "false";
};
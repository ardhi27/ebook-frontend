import { useAuth } from "../context/AuthContext";

const useAuthenticationHandlers = () => {
  const { handlers } = useAuth();
  if (!handlers) {
    throw new Error("handlers must be inside authentication context!");
  }
  return handlers;
};

export default useAuthenticationHandlers;

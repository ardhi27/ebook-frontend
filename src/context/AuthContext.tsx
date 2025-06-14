import {
  useContext,
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";

type User = {
  username: string;
  id: string;
};

type UserForm = {
  username: string;
  password: string;
};
interface AuthContextProps {
  isAuthenticated: boolean;
  token: string;
  user: User | null;
  handlers: {
    login: (data: UserForm) => void;
    logout: () => void;
  };
}
const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [isAuthenticated, setAuthenticated] = useState(false);
  const login = async (data: UserForm) => {
    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      console.log(res);
      if (res.data) {
        setToken(res.data.token);
        setAuthenticated(true);
        localStorage.setItem("token", res.token);
        window.location.href = "/";
      }
    } catch (err) {
      setAuthenticated(true);
      console.error(err);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    setAuthenticated(false);
    window.location.href = "/login";
  };

  const handlers = {
    login,
    logout,
  };

  useEffect(() => {
    if (!isAuthenticated) return;
    if (!token) {
      window.location.href = "/login";
    }
  }, [isAuthenticated, token]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, token, handlers }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};

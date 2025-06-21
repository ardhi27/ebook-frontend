import {
  useContext,
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import { useNavigate } from "react-router-dom";

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
  token: string | null;
  user: User | null;
  handlers: {
    login: (data: UserForm) => void;
    logout: () => void;
    register: (data: UserForm) => void;
  };
}
const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setAuthenticated] = useState(false);

  const register = async (data: UserForm) => {
    try {
      const response = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("Registration successfully!");
        alert("Registration success! redirect to login page");
        window.location.href = "/login";
      } else {
        const errorData = await response.json();
        console.log(
          "Error Registration : " + errorData || "Something went wrong"
        );
        alert("Error Registration" + errorData);
      }
    } catch (err) {
      console.error(err);
    }
  };

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
        localStorage.setItem("token", res.data.token);
        alert("Login successfully! redirect to homepage!");
        window.location.href = "/market";
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
    register,
  };

  useEffect(() => {
    const existedToken = localStorage.getItem("token");
    if (!existedToken) return;
    setToken(existedToken);
    setAuthenticated(true);
  }, []);

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

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  username: string | null;
  isLoading: boolean;
  login: (username: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [username, setUsername] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("username");
    if (stored) {
      setUsername(stored);
    }
    setIsLoading(false);
  }, []);

  const login = (newUsername: string) => {
    setUsername(newUsername);
    localStorage.setItem("username", newUsername);
  };

  const logout = () => {
    setUsername(null);
    localStorage.removeItem("username");
  };

  return (
    <AuthContext.Provider
      value={{
        username,
        isLoading,
        login,
        logout,
        isAuthenticated: !!username,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

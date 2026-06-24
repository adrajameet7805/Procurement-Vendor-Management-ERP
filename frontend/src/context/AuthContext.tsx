import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import api from '../api/axiosConfig';

export interface UserContextData {
  id: number;
  email: string;
  name: string;
  role: 'Admin' | 'Procurement Officer' | 'Manager' | 'Vendor';
}

interface AuthContextType {
  user: UserContextData | null;
  token: string | null;
  login: (token: string, userData: UserContextData) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserContextData | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would verify the token with the backend here.
    // For now, we will mock parsing it or assume if it exists, we are logged in.
    // Since we don't have the backend /me endpoint fully ready, let's mock it if token exists.
    const initializeAuth = async () => {
      if (token) {
        try {
          // Placeholder for real backend validation:
          // const response = await api.get('/auth/me');
          // setUser(response.data.data);
          
          // Temporary mock user extraction (usually decoded from JWT):
          const mockUserString = localStorage.getItem('user');
          if (mockUserString) {
            setUser(JSON.parse(mockUserString));
          } else {
             // Fallback dummy user if token exists but no user data
             setUser({
               id: 1,
               email: 'admin@procureflow.com',
               name: 'Admin User',
               role: 'Admin'
             });
          }
        } catch (error) {
          console.error('Failed to authenticate token', error);
          logout();
        }
      }
      setIsLoading(false);
    };

    initializeAuth();
  }, [token]);

  const login = (newToken: string, userData: UserContextData) => {
    localStorage.setItem('token', newToken);
    localStorage.setItem('user', JSON.stringify(userData));
    setToken(newToken);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isAuthenticated: !!token && !!user,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

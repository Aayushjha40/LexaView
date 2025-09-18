import { useState, useEffect } from 'react';
import authService from '../features/authentication/authService';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      setIsLoading(true);
      setError(null);
      const userData = await authService.login(email, password);
      setUser(userData.user);
      return userData;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name, email, password) => {
    try {
      setIsLoading(true);
      setError(null);
      const userData = await authService.signup(name, email, password);
      setUser(userData.user);
      return userData;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const googleSignIn = async (idToken) => {
    try {
      setIsLoading(true);
      setError(null);
      const userData = await authService.googleSignIn(idToken);
      setUser(userData.user);
      return userData;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return {
    user,
    isLoading,
    error,
    login,
    signup,
    googleSignIn,
    logout,
    isAuthenticated: !!user
  };
};
import React, { createContext, useState, useContext, useEffect } from "react";
import api from "../Services/Api";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      fetchUser();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUser = async () => {
    try {
      const response = await api.get("/user");
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user:", error);
      setError("Could not fetch user data.");
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/signIn", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      await fetchUser();
      return true;
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid credentials.");
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    api.defaults.headers.common["Authorization"] = "";
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

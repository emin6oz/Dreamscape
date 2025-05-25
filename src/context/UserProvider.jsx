// src/context/UserProvider.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
  try {
    const res = await axios.get("/api/profile");
    console.log("Fetched user:", res.data);
    setUser(res.data);
  } catch (err) {
    console.error("❌ Failed to fetch user:", err.response || err);
    setUser(null);
    setError(err);
  } finally {
    setChecked(true);
  }
};

  // useEffect(() => {
  //   fetchUser();
  // }, []);
  

useEffect(() => {
  console.log("User in context:", user);
}, [user]);


  return (
    <UserContext.Provider value={{ user, setUser, checked, error, refetch: fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};

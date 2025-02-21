import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user.context";
import { useNavigate } from "react-router-dom";

const UserAuth = ({ children }) => {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  if (user) {
    setLoading(false);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }

    if (!user) {
      navigate("/login");
    }
  }, []);

  return <>{children}</>;
};

export default UserAuth;

import { Outlet, useNavigate } from "react-router-dom";
import Dashboard from "../components/Seller/Dashboard";
import { useEffect, useState } from "react";

export default function Admin() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  const [isLoggedOut, setIsLoggedOut] = useState(false);

  useEffect(() => {
    if (isLoggedOut || localStorage.getItem("jwt") == null) {
      localStorage.clear();
      navigate("/login");
    }
    if (!isAdmin) navigate(-1);
  }, [isLoggedOut, isAdmin]);

  return <Dashboard setIsLoggedOut={setIsLoggedOut} Outlet={Outlet} />;
}

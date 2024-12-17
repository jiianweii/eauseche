import { Outlet, useNavigate } from "react-router-dom";
import Dashboard from "../components/Buyer/Dashboard";
import { useEffect, useState } from "react";

export default function User() {
  const navigate = useNavigate();
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  useEffect(() => {
    if (isLoggedOut || localStorage.getItem("jwt") == null) {
      localStorage.clear();
      navigate("/login");
    }
  }, [isLoggedOut]);

  return (
    <Dashboard setIsLoggedOut={setIsLoggedOut}>
      <Outlet />
    </Dashboard>
  );
}

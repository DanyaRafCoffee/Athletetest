import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedStats() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, [navigate]);

  return null;
}

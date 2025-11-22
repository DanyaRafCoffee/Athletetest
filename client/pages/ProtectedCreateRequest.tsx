import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export default function ProtectedCreateRequest() {
  const navigate = useNavigate();
  const { username, isLoading } = useAuth();

  useEffect(() => {
    if (isLoading) return;

    if (username) {
      navigate(`/${username}/create-request`);
    } else {
      navigate("/login");
    }
  }, [username, isLoading, navigate]);

  return null;
}

import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const checkRole = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setIsAdmin(user?.user_metadata?.role === "admin");
    };

    checkRole();
  }, []);

  if (isAdmin === null) return <p>Verificando rol...</p>;
  if (!isAdmin) return <Navigate to="/home" />;
  return children;
}

export default AdminRoute;


import { useState, useEffect, ReactNode } from "react";
import supabase from "../lib/supabase";
import { Session } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    if (!session) navigate("/login");
  }, []);
  return children;
};

export default ProtectedRoute;

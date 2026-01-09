import { Navigate } from "react-router";
import { useAuth } from "../contexts";

function PrivateRoute({ children, role }) {
  const { user } = useAuth();

  if (!user) return (<Navigate to="/login" />)
  else if (!role || role && user.role === role) return children;
  else return (<Navigate to="/403" />)
}

export default PrivateRoute;
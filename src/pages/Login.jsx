import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const handleLogin = () => {
    setUser({
      name: "Joana",
      age: 28,
    });
  };
  useEffect(() => {
    user && navigate(`/profile/${user.name}/${user.age}`);
  }, [navigate, user]);
  return (
    <div>
      <h2>Login</h2>
      <hr />

      <h3>Login Form</h3>

      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;

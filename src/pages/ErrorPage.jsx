import { useLocation } from "react-router-dom";

const ErrorPage = () => {
  const location = useLocation();

  return (
    <div>
      <h2>404 - {location.pathname} not Found!</h2>
    </div>
  );
};

export default ErrorPage;

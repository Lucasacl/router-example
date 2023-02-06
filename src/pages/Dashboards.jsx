import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button type="button" onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
};

export default Dashboard;

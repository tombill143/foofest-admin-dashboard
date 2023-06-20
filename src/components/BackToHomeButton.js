import { useNavigate } from "react-router-dom";

const BackToHomeButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return <button onClick={handleClick}>Back to Home</button>;
};

export default BackToHomeButton;

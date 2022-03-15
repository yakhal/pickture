import { useNavigate } from "react-router-dom";

function PromptToLogin() {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/login");
  };
  return (
    <section className="card">
      <p className="redirection-message">
        You need to Login before you access the app!
      </p>
      <button onClick={onClickHandler} className="submit">
        Login
      </button>
    </section>
  );
}

export default PromptToLogin;

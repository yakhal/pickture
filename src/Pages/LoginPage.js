import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [formFields, setFormFields] = useState({
    user: "",
    pwd: "",
    isInvalid: false,
  });
  const navigate = useNavigate();

  const userNameChangeHandler = (event) => {
    setFormFields({
      ...formFields,
      user: event.target.value,
      isInvalid: false,
    });
  };

  const passwordChangeHandler = (event) => {
    setFormFields({ ...formFields, pwd: event.target.value, isInvalid: false });
  };

  const onSubmitHandler = () => {
    if (!(formFields.user && formFields.pwd)) {
      setFormFields({ ...formFields, isInvalid: true });
    } else {
      navigate(`/home`);
    }
  };

  return (
    <section className="card">
      <input
        onChange={userNameChangeHandler}
        input={formFields.user}
        type="text"
        placeholder="Your Name"
      />
      <input
        onChange={passwordChangeHandler}
        input={formFields.pwd}
        type="password"
        placeholder="Password"
      />
      {formFields.isInvalid && (
        <p className="error">Please enter the credentials properly</p>
      )}
      <button onClick={onSubmitHandler} className="submit">
        Login
      </button>
    </section>
  );
}

export default LoginPage;

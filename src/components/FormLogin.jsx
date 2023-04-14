import { useState } from "react";
import { SignInUser } from "../services/Auth";
import { useNavigate, Link } from "react-router-dom";

export default function Login(props) {
  let navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log(formValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = await SignInUser(formValues);
    setFormValues({ email: "", password: "" });
    props.setUser(payload);
    props.toggleAuthenticated(true);
    navigate(`/`);
    console.log("logged in!");
  };

  return (
    <div>
      <div className="container">
        <div className="login-form">
          <form className="login" onSubmit={handleSubmit}>
            <label htmlFor="username">email</label>
            <input
              onChange={handleChange}
              name="email"
              type="text"
              value={formValues.email}
            />
            <label htmlFor="password">password</label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              value={formValues.password}
            />
            <input className="login-btn" type="submit" value="log in!" />
          </form>
          <h5>
            If you don't have an account, click <Link to="/register">here</Link>{" "}
            to register.
          </h5>
        </div>
      </div>
    </div>
  );
}

import React, { useCallback, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { signIn } = useAuth();

  const hundleSubmit = useCallback(
    async (event: { preventDefault: () => void }) => {
      event.preventDefault();

      await signIn({ username, password });
      navigate("/dashboard");
    },
    [signIn, username, password, navigate]
  );

  return (
    <div className="container">
      <h2 className="title">LOGIN</h2>
      <form onSubmit={hundleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="" className="label">
            Usuário
          </label>
          <input
            type="text"
            className="input"
            onChange={(event) => setUsername(event.target.value)}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="" className="label">
            Senha
          </label>
          <input
            type="password"
            className="input"
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>

        <div className="form-group">
          <button type="submit" className="button">
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

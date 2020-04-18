import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import api from "../../services/api";

function Navbarlogin() {
  const [email, setEmail] = useState("");
  const [password, setemailPassword] = useState("");
  async function handleAddUser(e) {
    e.preventDefault();
    const response = await api.post("/api/users/login", {
      email,
      password,
    });
    console.log(response);
  }

  return (
    <div className="Header">
      <div className="center">
        <div className="logo">
          <h2>DEVSBOOK</h2>
        </div>
        <form onSubmit={handleAddUser} method="post" className="form-login">
          <div className="form-element">
            <p>Email ou telefone</p>
            <input
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-element">
            <p>Senha</p>
            <input
              value={password}
              type="password"
              onChange={(e) => setemailPassword(e.target.value)}
            />
          </div>

          <div className="form-element">
            <Link to="/send-email">
              <button className="buttonEntry">
                <b>Entrar</b>
              </button>
            </Link>
          </div>
        </form>
        <div className="clear"></div>
      </div>
    </div>
  );
}

export default Navbarlogin;

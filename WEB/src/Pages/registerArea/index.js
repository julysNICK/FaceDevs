import React, { useState } from "react";
import "./style.css";
import api from "../../services/api";
import friends from "../../assets/friends.png";
function Main() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [nascDia, setDia] = useState("01");
  const [nascMes, setMes] = useState("junho");
  const [nascAno, setAno] = useState("2001");
  const [Genre, setGenre] = useState("");
  console.log(Genre);
  async function handleAddUser(e) {
    e.preventDefault();
    const response = await api.post("/api/users/register", {
      name,
      surname,
      password,
      email,
      dateBirth: `${nascDia}/${nascMes}/${nascAno}`,
      Genre: getRadioValor("sexo"),
    });
    console.log(response);
  }
  //pegando valores dos input tipo radio
  function getRadioValor(name) {
    var rads = document.getElementsByName(name);

    for (var i = 0; i < rads.length; i++) {
      console.log("aqui");
      if (rads[i].checked) {
        return rads[i].value;
      }
    }
    return null;
  }
  return (
    <section className="main">
      <div className="center">
        <div className="img-shared">
          <img src={friends} alt="alow" />
        </div>
        <div className="abrir-conta">
          <h2>Abra sua conta</h2>
          <h3>É gratuito e facil</h3>
          <form onSubmit={handleAddUser} action="" className="criar-conta">
            <div className="w50">
              <input
                placeholder="Nome"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w50">
              <input
                placeholder="sobrenome"
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
            <div className="w100">
              <input
                placeholder="Email ou telefone"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w100">
              <input
                placeholder="Nova senha"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="w100">
              <h2>Data de nascimento</h2>
              <select
                name="nascimento-dia"
                id=""
                value={nascDia}
                onChange={(e) => setDia(e.target.value)}
              >
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
              </select>
              <select
                name="dateBirth-mes"
                value={nascMes}
                onChange={(e) => setMes(e.target.value)}
              >
                <option value="junho">junho</option>
                <option value="janeiro">janeiro</option>
                <option value="">...</option>
              </select>
              <select
                name="dateBirth-ano"
                value={nascAno}
                onChange={(e) => setAno(e.target.value)}
              >
                <option value="2001">2001</option>
                <option value="1999">1999</option>
                <option value="1">...</option>
              </select>
              <div className="clear"></div>
              <div className="w100">
                <div className="input-radio">
                  <input
                    type="radio"
                    name="sexo"
                    value={"masculino"}
                    onChange={(e) => setGenre(getRadioValor("sexo"))}
                  />
                  <h2>Masculino</h2>
                </div>
                <div className="input-radio">
                  <input
                    type="radio"
                    name="sexo"
                    value={"feminino"}
                    onChange={(e) => setGenre(getRadioValor("sexo"))}
                  />
                  <h2>Feminino</h2>
                </div>
                <div className="clear"></div>
              </div>
            </div>
            <div className="w100">
              {" "}
              <input type="submit" name="acao" value="Cadastra!" />
            </div>
            <div className="clear"> </div>
          </form>
        </div>
        <div className="clear"></div>
      </div>
    </section>
  );
}

export default Main;

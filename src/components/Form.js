import React from "react";

function Form() {
  return (
    <div className="form-wrapper">
      <form>
        <h4>Cadastre-se</h4>
        <div className="form-box">
          <div className="input-box">
            <input type="text" placeholder="Username"></input>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Nome Completo"></input>
          </div>
          <div className="input-box">
            <input type="text" placeholder="E-mail"></input>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Cidade"></input>
          </div>
          <div className="radio-wrapper">
            <p>DIAS DA SEMANA</p>
            <label>
              <input type="radio"></input>
              Seg
            </label>
            <label>
              <input type="radio"></input>
              Ter
            </label>
            <label>
              <input type="radio"></input>
              Qua
            </label>
            <label>
              <input type="radio"></input>
              Qui
            </label>
            <label>
              <input type="radio"></input>
              Sex
            </label>
            <label>
              <input type="radio"></input>
              Sab
            </label>
            <label>
              <input type="radio"></input>
              Dom
            </label>
          </div>
        </div>
        <div className="form-buttons">
          <button>Registrar</button>
          <button>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default Form;

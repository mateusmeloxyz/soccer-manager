import React from "react";
import Form from "./Form";

function RegisterView() {
  return (
    <div className="register-section">
      <h1>Registrar</h1>
      <div className="help-section-wrapper">
        <div className="help-item">
          <h4>Precisa de Ajuda?</h4>
          <div className="help-icon-text">
            <div>floater icon</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="help-item">
          <h4>Porque se registrar?</h4>
          <div className="help-icon-text">
            <div>heart icon</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="help-item">
          <h4>O que está rolando</h4>
          <div className="help-icon-text">
            <div>smile logo</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <Form />
    </div>
  );
}

export default RegisterView;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function Row(props) {
  return (
    <tr>
      <td>Sonya64</td>
      <td>Mildred Turner</td>
      <td>loraine25@hotmail.com</td>
      <td>West Abraham</td>
      <td>Todos</td>
      <td>3</td>
      <td>2</td>
    </tr>
  );
}

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://626bd539e5274e6664d24112.mockapi.io/front-test/v1/user")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="company-container">
        <nav>
          <div className="logo">Sensedia Soccer Manager</div>
        </nav>
      </div>
      <div className="nav-container">
        <nav>
          <div className="logo">Welcome &gt; Register -</div>
          <div className="logo"> help -</div>
          <div className="logo"> waffle menu</div>
          <div className="logo"> | User Name</div>
        </nav>
      </div>
      <div className="header-container">
        <div className="wrapper">
          <header>
            <div>
              <h3>Tipo de quadra</h3>
              <p>Society</p>
            </div>
            <div>
              <h3>Nível</h3>
              <p>Semi-profissional</p>
            </div>
            <div>
              <h3>Vitórias</h3>
              <p>345</p>
            </div>
          </header>
        </div>
      </div>
      <div className="body-container">
        <div className="wrapper">
          <div className="user-section">
            <h1>Usuários</h1>
            <div className="search-box">
              <input type="text" placeholder="Search"></input>
              <button href="#">Lupa</button>
            </div>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <td>USERNAME</td>
                    <td>NOME</td>
                    <td>E-MAIL</td>
                    <td>CIDADE</td>
                    <td>DIAS DA SEMANA</td>
                    <td>POSTS</td>
                    <td>ÁLBUMS</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sonya64</td>
                    <td>Mildred Turner</td>
                    <td>loraine25@hotmail.com</td>
                    <td>West Abraham</td>
                    <td>Todos</td>
                    <td>3</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Selena89</td>
                    <td>Troy Boehm</td>
                    <td>agnes_lang@hotmail.com</td>
                    <td>Bahringerbury</td>
                    <td>Fins de Semana</td>
                    <td>3</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Laverna58</td>
                    <td>Maureen Kemmer</td>
                    <td>agustina.orn@hotmail.com</td>
                    <td>Ryannmouth</td>
                    <td>Seg, Qua</td>
                    <td>3</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Ari17</td>
                    <td>Dale Schulist</td>
                    <td>sterling.maggio@hotmail.com</td>
                    <td>Alishastad</td>
                    <td>Ter, Qui</td>
                    <td>3</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Lue83</td>
                    <td>Caleb Mitchell</td>
                    <td>zena.jakubowski97@gmail.com</td>
                    <td>South Markusland</td>
                    <td>Seg, Ter, Qua, Qui</td>
                    <td>3</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="table-nav-wrapper">
              <div>Total 100 show 10 results</div>
              <div>- Navigation buttons - </div>
              <div>Jump to page &gt;5</div>
            </div>
          </div>

          <div className="register-section">
            <h1>Registrar</h1>
            <div className="help-section-wrapper">
              <div className="help-item">
                <h4>Precisa de Ajuda?</h4>
                <div className="help-icon-text">
                  <div>floater icon</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="help-item">
                <h4>Porque se registrar?</h4>
                <div className="help-icon-text">
                  <div>heart icon</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="help-item">
                <h4>O que está rolando</h4>
                <div className="help-icon-text">
                  <div>smile logo</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

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
          </div>
        </div>
      </div>

      <div className="footer-container">
        <div className="wrapper">
          <footer>
            <div>Nothing here yet</div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
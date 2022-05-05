import React, { useState, useEffect } from "react";
import axios from "axios";
import Row from "./Row";
import SearchBox from "./SearchBox";

function UserView() {
  const [users, setUsers] = useState([]);
  const [render, reRender] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [usersPerPage, setUsersPerPage] = useState(5);
  const [currPage, setCurrPage] = useState(0);

  const handlePrev = () => {
    setCurrPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrPage((prev) => prev + 1);
  };

  const listUsers = users
    .filter((user) => user.blocked === false)
    .filter(
      (user) =>
        user.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
        user.username.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    )
    .slice(currPage * usersPerPage, currPage * usersPerPage + usersPerPage)
    .map((user) => <Row key={user.id} props={user} reRender={reRender} />);

  useEffect(() => {
    axios
      .get("https://626bd539e5274e6664d24112.mockapi.io/front-test/v1/user")
      .then((res) => {
        console.log(res);
        setUsers([...users, ...res.data]);
      })
      .catch((err) => console.log(err));
  }, [render]);

  useEffect(() => {
    console.log(render);
  }, [render]);

  return (
    <div className="user-section">
      <h1>Usuários</h1>
      <SearchBox searchText={searchText} handleSubmit={setSearchText} />
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
          <tbody>{listUsers}</tbody>
        </table>
      </div>

      <div className="table-nav-wrapper">
        <div className="table-nav-control">
          <div>Total {users.length}</div>
          <div>show {usersPerPage} results</div>
        </div>
        <div className="table-nav-buttons">
          <button onClick={handlePrev}>PREV</button>
          <div className="table-nav-page-buttons">
            <button onClick={() => setCurrPage(0)}>1</button>
            ...
            <button onClick={handlePrev}>{currPage + 1 - 1}</button>
            <button>{currPage + 1}</button>
            <button onClick={handleNext}>{currPage + 1 + 1}</button>
            ...
            <button>{Math.floor(users.length / usersPerPage)}</button>
          </div>
          <button onClick={handleNext}>NEXT</button>
        </div>
        <div className="table-nav-page-choice">
          Jump to page{" "}
          <select name="page-choice">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value={currPage} selected>
              {currPage + 1}
            </option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default UserView;

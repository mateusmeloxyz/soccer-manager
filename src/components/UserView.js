import React, { useState, useEffect } from "react";
import axios from "axios";
import Row from "./Row";
import SearchBox from "./SearchBox";

function UserView() {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [usersPerPage, setUsersPerPage] = useState(5);
  const [currPage, setCurrPage] = useState(0);
  const [usersQnt, setUsersQnt] = useState(0);

  const handlePrev = () => {
    setCurrPage((prev) => (prev >= 1 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrPage((prev) =>
      prev < usersQnt / usersPerPage - 1 ? prev + 1 : prev
    );
  };

  const listUsers = users
    .filter((user) => user.blocked === false)
    .filter(
      (user) =>
        user.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
        user.username.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    )
    .slice(currPage * usersPerPage, currPage * usersPerPage + usersPerPage)
    .map((user) => (
      <Row
        key={user.id}
        props={user}
        usersQnt={usersQnt}
        setUsersQnt={setUsersQnt}
      />
    ));

  useEffect(() => {
    axios
      .get("https://626bd539e5274e6664d24112.mockapi.io/front-test/v1/user")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
        setUsersQnt(res.data.filter((user) => user.blocked === false).length);
      })
      .catch((err) => console.log(err));
  }, [usersQnt]);

  return (
    <div className="user-section">
      <h1>Usuários</h1>
      <SearchBox searchText={searchText} handleSubmit={setSearchText} />
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>USERNAME</th>
              <th>NOME</th>
              <th>E-MAIL</th>
              <th>CIDADE</th>
              <th>DIAS DA SEMANA</th>
              <th>POSTS</th>
              <th>ÁLBUMS</th>
            </tr>
          </thead>
          <tbody>{listUsers}</tbody>
        </table>
      </div>

      <div className="table-nav-wrapper">
        <div className="table-nav-control">
          <div>Total {usersQnt}</div>
          <div>show {usersPerPage} results</div>
        </div>
        <div className="table-nav-buttons">
          {currPage !== 0 && <button onClick={handlePrev}>PREV</button>}
          <div className="table-nav-page-buttons">
            {currPage >= 2 && <button onClick={() => setCurrPage(0)}>1</button>}
            {/*currPage >= 3 &&*/ <p>...</p>}
            {currPage >= 1 && (
              <button onClick={handlePrev}>{currPage + 1 - 1}</button>
            )}
            <button>{currPage + 1}</button>
            {currPage < Math.floor(usersQnt / usersPerPage) && (
              <button onClick={handleNext}>{currPage + 1 + 1}</button>
            )}
            {currPage < Math.floor(usersQnt / usersPerPage) - 2 && <p>...</p>}
            {currPage < Math.floor(usersQnt / usersPerPage) - 1 && (
              <button>{Math.floor(usersQnt / usersPerPage) + 1}</button>
            )}
          </div>
          {currPage < Math.floor(usersQnt / usersPerPage) && (
            <button onClick={handleNext}>NEXT</button>
          )}
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

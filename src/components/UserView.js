import React, { useState, useEffect } from "react";
import axios from "axios";
import Row from "./Row";
import SearchBox from "./SearchBox";

function UserView() {
  const [users, setUsers] = useState([]);
  const [render, reRender] = useState(false);
  const [searchText, setSearchText] = useState("");

  const listUsers = users
    .filter((user) => user.blocked === false)
    .filter(
      (user) =>
        user.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
        user.username.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    )
    .slice(0, 5)
    .map((user) => <Row key={user.id} props={user} reRender={reRender} />);

  useEffect(() => {
    axios
      .get("https://626bd539e5274e6664d24112.mockapi.io/front-test/v1/user")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
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
        <div>Total 100 show 10 results</div>
        <div>- Navigation buttons - </div>
        <div>Jump to page &gt;5</div>
      </div>
    </div>
  );
}

export default UserView;

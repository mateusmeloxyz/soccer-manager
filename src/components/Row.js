import React, { useState, useEffect } from "react";
import axios from "axios";

function Row({ props, reRender }) {
  const [posts, setPosts] = useState(0);
  const [albums, setAlbums] = useState(0);

  const handleDelete = () => {
    console.log("called handle delete");
    axios
      .put(
        `https://626bd539e5274e6664d24112.mockapi.io/front-test/v1/user/${props.id}`,
        { blocked: true }
      )
      .then((res) => {
        console.log(res);
        reRender((current) => !current);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const getPosts = axios.get(
      `https://626bd539e5274e6664d24112.mockapi.io/front-test/v1/user/${props.id}/posts`
    );

    const getAlbums = axios.get(
      `https://626bd539e5274e6664d24112.mockapi.io/front-test/v1/user/${props.id}/albums`
    );

    axios
      .all([getPosts, getAlbums])
      .then(
        axios.spread((...allData) => {
          setPosts(allData[0].data);
          setAlbums(allData[1].data);
        })
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <tr>
      <td>{props.username}</td>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.city}</td>
      <td>Todos</td>
      <td>{posts.length}</td>
      <td>{albums.length}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default Row;

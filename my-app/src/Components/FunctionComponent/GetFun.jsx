import axios from "axios";
import React, { useEffect, useState } from "react";
function GetFun() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div id="card">
      {posts.map((value) => (
        <div key={value.id} className="content">
          <h3>Name : {value.name}</h3>
          <p>Email : {value.email}</p>
          <p>Body : {value.body} </p>
        </div>
      ))}
    </div>
  );
}
export default GetFun;

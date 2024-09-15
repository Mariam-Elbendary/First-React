import axios from "axios";
import React, { useEffect, useState } from "react";

function PostFun () {

    const [id,setId] =useState()
    const [posts, setPost] = useState({});
    const [button,setButton] = useState ()

    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then((response) => {
          setPost(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [button]);

    return(
        <div>
        <label>Please Enter the Post ID:</label>
        <br></br>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <br></br>
        <button onClick={() => setButton(id)}>Search</button>
        <div>
            <h2>The Post You have searched for </h2>
            <div>Id : {posts.id}</div>
            <div>Name : {posts.name}</div>
            <div>Body : {posts.body}</div>
            <div>Email : {posts.email}</div>

        </div>
    </div>
    )
}

export default PostFun;
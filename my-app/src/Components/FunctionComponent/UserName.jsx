import React, { useEffect,useState } from "react";

function UserName() {
  const [name, setName] = useState("");

  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    if (name) {
      setGreeting(`Hello  ${name}`);
    } else {
      setGreeting("");
    }
  }, [name]);

  return (
    <div>
      <label>User Name</label>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      <p>{greeting}</p>
    </div>
  );
}

export default UserName;

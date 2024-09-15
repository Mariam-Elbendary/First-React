import React from "react";

function ThirdCompo({ fname, lname, age, skills, children }) {
  return (
    <div>
      <h4>
        {" "}
        This is {fname} {lname} my age is {age} my skills are {skills.skill1} ,
        {skills.skill2}{" "}
      </h4>
      <p> {children}</p>
    </div>
  );
}

export default ThirdCompo;

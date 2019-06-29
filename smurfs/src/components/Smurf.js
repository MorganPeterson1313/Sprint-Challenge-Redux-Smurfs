import React from "react";

const Smurf = props => {
  return (
    <div style={{ color: "blue", fontSize: "30px" }}>
      <section>
        <strong>Name:</strong> {props.smurf.name}
      </section>
      <section>
        <strong>Email:</strong> {props.smurf.age}
      </section>
      <section>
        <strong>Email:</strong> {props.smurf.height}
      </section>
    </div>
  );
};

export default Smurf;

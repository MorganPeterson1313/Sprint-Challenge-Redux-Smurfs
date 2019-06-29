import React from "react";

const Smurf = props => {
  return (
    <div style={{ color: "brown", fontSize: "30px" }}>
      <section>
        <strong>Name:</strong> {props.smurf.name}
      </section>
      <section>
        <strong>Age:</strong> {props.smurf.age}
      </section>
      <section>
        <strong>Height:</strong> {props.smurf.height}
      </section>
    </div>
  );
};

export default Smurf;

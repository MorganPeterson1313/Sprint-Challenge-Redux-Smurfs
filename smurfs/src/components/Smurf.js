import React from "react";

const Smurf = props => {
  return (
    <div style={{ color: "red", fontSize: "30px" , margin:'3%'}}>
      <section>
        <strong>Name:</strong>,<span style ={{color:'white'}}  > {props.smurf.name}</span>
      </section>
      <section>
        <strong>Age:</strong><span style ={{color:'white'}}> {props.smurf.age}</span>
      </section>
      <section>
        <strong>Height:</strong><span style ={{color:'white'}}> {props.smurf.height}</span>
      </section>
    </div>
  );
};

export default Smurf;

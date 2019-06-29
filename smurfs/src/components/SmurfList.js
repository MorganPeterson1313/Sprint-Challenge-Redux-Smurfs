import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions";
import Smurf from "./Smurf";

export class SmurfList extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log("smurflist log", this.props.smurfs);
    return (
      <div
      style={{
        bacgroundColor: "rgba(0, 0, 0,.03)",
        border: "solid 2px brown ",
        margin: "5%",
        width: "400px",
        height: "200px",
        marginLeft: '35%'
      
      }}
      >
        {this.props.smurfs.map(smurf => {
          return (
            <div>
              <Smurf key={smurf.id} smurf={smurf} />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs
});

export default connect(
  mapStateToProps,
  { getData }
)(SmurfList);

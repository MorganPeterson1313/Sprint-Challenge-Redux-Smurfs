import React, { Component } from "react";
import { connect } from "react-redux";
import { getData, deleteSmurf } from "../actions";
import Smurf from "./Smurf";

export class SmurfList extends Component {
  componentDidMount() {
    this.props.getData();
  }

  deleteSmurf = id => {
    this.props.deleteSmurf(id);
  };

  render() {
    console.log("smurflist log", this.props.smurfs);
    return (
      <div>
        {this.props.smurfs.map(smurf => {
          return (
            <div
              style={{
                bacgroundColor: "rgba(0, 0, 0,.03)",
                border: "solid 2px brown ",
                margin: "5%",
                width: "400px",
                height: "200px",
                marginLeft: "35%",
                backgroundImage:
                  "url(http://snappi-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/smurfs0001_0.jpg)",
                backgroundSize: "cover",
                backgroundRepeat: "noRepeat",
                backgroundBlendMode: "",
                opacity: "0.7"
              }}
            >
              <Smurf key={smurf.id} smurf={smurf} />
              <button
                style={{
                  backgroundColor: "dodgerblue",
                  border: "2px solid brown",
                  borderRadius: "10%",
                  color: "white",
                  width: "100px",
                  height: "45px"
                }}
                onClick={() => this.deleteSmurf(smurf.id)}
              >
                Delete
              </button>
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
  { getData, deleteSmurf }
)(SmurfList);

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
      <div>
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

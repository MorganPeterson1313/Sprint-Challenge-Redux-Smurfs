import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getSmurf} from '../actions';

export class SmurfForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          id: '',
          age:'',
          height:'',
          addingSmurfs: false,
        
        };
      }
    


      componentDidMount() {
        this.addSmurf = e => {
              // e.preventDefault;
        const newSmurf = this.state;
        this.props.getSmurf(newSmurf);
      }
    }

    handleInputChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type='submit'>Add Smurf</button>
        </form> 
            </div>
        )
    }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingData: state.fetchingData
  });
  
  export default connect(
      mapStateToProps,
    { getSmurf}
  )(SmurfForm);

import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";
import styled from "styled-components";

const UList = styled.ul`
  display: flex;
  list-style: none;
  border-bottom: 2px coral solid;
  width: auto;
`;
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <Router>
        <div
         
          className="App"
        >
          <UList>
            <li>
              <Link
                style={{ color: "yellow", textDecoration: "none" }}
                to="/smurf"
              >
                Smurf Village
              </Link>
            </li>
            <li>
              <Link
                style={{
                  color: "yellow",
                  textDecoration: "none",
                  marginLeft: "2%"
                }}
                to="/form"
              >
                Add Smurf
              </Link>
            </li>
          </UList>

          <Route path="/smurf" component={SmurfList} />
          <Route path="/form" component={SmurfForm} />
        </div>
      </Router>
    );
  }
}

export default App;

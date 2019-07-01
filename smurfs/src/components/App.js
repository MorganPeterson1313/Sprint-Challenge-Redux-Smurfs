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
  height: 100px;
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDS9yjM411PnorQb4CEe4eUulhxl_BwC25TVif5H2_kv1xUwIJDg);
  background-size: contain;
  top:0;
  width: 100%;
  opacity: 0.5;
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
        <div className="App" >
          <UList className = 'sticky'>
            <li>
              <Link
                style={{ color: "dodgeblue", textDecoration: "none",fontSize: '30px' }}
                to="/smurf"
              >
                Smurf Village
              </Link>
            </li>
            <li>
              <Link
                style={{
                  color: "dodgeblue",
                  textDecoration: "none",
                  marginLeft: "2%",
                  fontSize: '30px',
                
                }}
                to="/form"
              >
                Add Smurf
              </Link>
            </li>
          </UList>

          <Route path="/smurf" component={SmurfList} 
          style = {{


            

          }}
          
          
          
          />
          <Route path="/form" component={SmurfForm} />
        </div>
      </Router>
    );
  }
}

export default App;

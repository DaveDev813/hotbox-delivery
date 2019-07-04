import React from "react";
import logo from "../images/logo.jpg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import Home from "./Home";
import Checkout from "./Checkout";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          style={{ width: "300px" }}
          alt="logo"
        />
      </header>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/orders" component={Checkout} />
        </Switch>
      </Container>
    </div>
  );
};

export default App;

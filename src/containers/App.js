import React, { Component } from "react";
import "./App.css";
import Footer from "../components/Footer/Footer";
import Content from "./Content/Content";
import Auth from "./Auth/Auth";
import Header from "../components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    isLogged: true,
  };

  render() {
    /*let main = null;
    if (this.state.isLogged)
      main = (
        <main>
          <Content />
        </main>
      );
    else
      main = (
        <main>
          <Auth isLogged={this.state.isLogged} />
        </main>
      );
*/
    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Switch>
              <Route path="/login">
                  <Auth isLogged={this.state.isLogged} />
              </Route>
              <Route exact path="/dashboard">
                  <Content />
              </Route>
              <Route exact path="/dashboard/Edit">
                  <div> Editar</div>
              </Route>
              <Route exact path="/dashboard/New">
                  <div> New</div>
              </Route>
            </Switch>
          </main>
          <Footer
            link="https://www.linkedin.com/in/ruslan-krasiy-b7566016a/"
            linktitle="LinkedIn/ruslan-krasiy"
          >
            @Ruslan Krasiy
          </Footer>
        </div>
      </Router>
    );
  }
}

export default App;

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
    /*let section = null;
    if (this.state.isLogged)
      section = (
        <section>
          <Content />
        </section>
      );
    else
      section = (
        <section>
          <Auth isLogged={this.state.isLogged} />
        </section>
      );
*/
    return (
      <Router>
        <div className="App">
          <Header />
          <section>
            <Switch>
              <Route path="/login">
                  <Auth isLogged={this.state.isLogged} />
              </Route>
              <Route path="/dashboard">
                  <Content />
              </Route>
            </Switch>
          </section>
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

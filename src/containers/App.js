import React, {Component} from 'react';
import './App.css';
import Footer from "../components/Footer/Footer";
import Dashboard from "../components/Dashboard/Dashboard";
import FormValidation from "../components/Forms/FormValidation/FormValidation";
import Header from "../components/Header/Header";

class App extends Component {
  state = {
    isLogged: false
  }

 render(){
  let section = null 
  if(!this.state.isLogged)
    section = <section><Dashboard /></section>
  else
    section = <section><FormValidation /></section>

  return (
    <div className="App">
      <Header />
      {section}
      <Footer 
        link="https://www.linkedin.com/in/ruslan-krasiy-b7566016a/"
        linktitle="LinkedIn/ruslan-krasiy">
          @Ruslan Krasiy
        </Footer>
    </div>
  )
 }
}

export default App;

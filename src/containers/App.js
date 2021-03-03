import React, {Component} from 'react';
import './App.css';
import Footer from "./Footer";
import logo from "../assets/images/logo.svg";
import AdminPanel from "../components/AdminPanel/AdminPanel";
import FormValidation from "../components/Forms/FormValidation/FormValidation"
class App extends Component {
  state = {
    isLogged: false
  }
 render(){
  let section = null 
  if(this.state.isLogged)
    section = <AdminPanel></AdminPanel>
  else
    section = <FormValidation></FormValidation>
  return (
    <div className="App">
      <header className="App-header">
        <div className="column">
            <img src={logo} className="logo"/>
            <div className="column">Adminer</div>
        </div>
        
        <nav className="App-navbar"><div><button>Entrar</button></div></nav>
      </header>
      <section>{section}</section>
      <Footer>Designed by 
        <a href="https://www.linkedin.com/in/ruslan-krasiy-b7566016a/" 
        target="_blank"> @Ruslan Krasiy</a>
        </Footer>
    </div>
  )
 }
}

export default App;

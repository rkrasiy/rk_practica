import React, { Component } from "react";
import Menu from "./Menu/Menu";
import ClientsList from "../ClientsList/ClientsList";
import ProductsList from "../ProductsList/ProductsList";
import "./Dashboard.css";

class Dashboard extends Component {
  state = {
    menu: [
      {
        id: "itm-1",
        titleElement: "Clientes",
        active: "active"
      },
      {
        id: "itm-2",
        titleElement: "Productos",
        active: ""
      },
    ],
  };
 clickMenuItemHandler = (id) => {
    let menu = [...this.state.menu]
    let newMenu = [...menu.map( el => {
      if(el.id === id){
        el.active = "active"
      }else{
        el.active = ""
      }
      return el
    })]

    this.setState({menu: newMenu})
 }
  render() {
    return (
      <div className="Dashboard">
        <Menu 
          child={this.state.menu} 
          clicked={this.clickMenuItemHandler}
        />
        <div className="content">
          <ClientsList></ClientsList>
          <ProductsList></ProductsList>
        </div>
      </div>
    );
  }
}

export default Dashboard;

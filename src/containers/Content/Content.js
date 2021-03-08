import React, { Component } from "react";
import Menu from "../../components/Menu/Menu";
import ClientsList from "../../components/ClientsList/ClientsList";
import ProductsList from "../../components/ProductsList/ProductsList";
import "./Content.css";

class Content extends Component {
  state = {
    menu: [
      {
        id: "itm-1",
        titleElement: "Clientes",
        active: true
      },
      {
        id: "itm-2",
        titleElement: "Productos",
        active: false
      }
    ],
  };

 clickMenuItemHandler = (id) => {
    let menu = [...this.state.menu]
    let newMenu = [...menu.map( el => {
      if(el.id === id){
        el.active = true
      }else{
        el.active = false
      }
      return el
    })]

    this.setState({menu: newMenu})
 }
 
  render() {
    let contentList = "";

    if(this.state.menu[0].active)
      contentList = <ClientsList />
    if(this.state.menu[1].active)
      contentList = <ProductsList />
    return (
      <div className="Content">
        <Menu 
          child={this.state.menu} 
          clicked={this.clickMenuItemHandler}
        />
        <div className="content">
          {contentList}
        </div>
      </div>
    );
  }
}

export default Content;

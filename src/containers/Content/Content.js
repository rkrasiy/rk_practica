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
    clientes: null,
    productos: null
  };

 componentDidMount = () => {
   fetch("http://localhost:3001/clients")
    .then(response => {
      return response.json()
    }).then( (data)=> {
        console.log(data)
        this.setState({clientes: data})
      })

    fetch("http://localhost:3001/products")
      .then(response => {
        return response.json()
      }).then( (data)=> {
          console.log(data)
          this.setState({productos: data})
        })    
 }

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
      contentList = <ClientsList json={this.state.clientes} />
    if(this.state.menu[1].active)
      contentList = <ProductsList json={this.state.productos}/>
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

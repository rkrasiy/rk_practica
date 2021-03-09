import React, { Component } from "react";
import Client from "../../components/Client/Client";
import Button from "../../components/Button/Button";

class Clients extends Component {
  state = {
    clientes: null
  }
  componentDidMount = () => {
    fetch("http://localhost:3030/clients")
      .then(response => {
        return response.json()
      }).then( (data)=> {
        this.setState({clientes: data})
      })
      .catch(err => {
        console.log(err.message)
        }
      )
  }
 
  addNewClientHandler = () => {
    console.log("add new Product")
  }

  editClientHandler = (id)=>{
    console.log("edit", id)
  }

  removeClientHadler = (id) => {
    console.log("remove", id)
  }
  render(){
    let persons = "";
    let itemsCount = 0
    if(this.state.clientes){
      itemsCount = this.state.clientes.length;
      persons = this.state.clientes.map( (person, index) => (
        <Client
          number={index + 1}
          key={person.id} 
          name={person.name}
          email={person.email}
          clickedEdit={this.editClientHandler.bind(this, person.id)}
          clickedRemove={this.removeClientHadler.bind(this, person.id)} />))
    }
      
    return (
      <div className="Products">
        <div className="row right">
          <Button 
            classes="green right" 
            clicked={this.addNewClientHandler}>Nuevo Cliente</Button>
        </div>
        <div className="list-items">
          {persons}
        </div>
        <div>
          Clientes: {itemsCount}
        </div>
      </div>
    )
  }
}
export default Clients

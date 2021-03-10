import React, { Component } from "react";
import Client from "../../components/Client/Client";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

class Clients extends Component {
  state = {
    clientes: null,
    openModal: false,
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your First Name",
        },
        value: "",
        validation: {
          required: true,
          minLength: 3,
        },
        valid: false,
        touched: false,
      },
      last_name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Second Name",
        },
        value: "",
        validation: {
          required: true,
          minLength: 3,
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
  };
  componentDidMount = () => {
    fetch("http://localhost:3030/clients")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ clientes: data });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  openModalHandler = () => {
    let openModal = this.state.openModal;
    this.setState({ openModal: !openModal });
  };

  closeModalHandler = () => {
    this.setState({ openModal: false });
  }
  checkValidaty = ( value, rules ) => {
    let isValid = true;

    if(rules.required) {
        isValid = value.trim() !== "" && isValid;
    }
    if(rules.minLength){
        isValid = value.length >= rules.minLength && isValid
    }
    if(rules.maxLength){
        isValid = value.length <= rules.maxLength && isValid
    }
    if(rules.isEmail){
        const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        isValid = pattern.test(value) && isValid
    }

    return isValid
}
  addNewClientHandler = (event) => {
    event.preventDefault();
    let formData = []
    for(let formElement in this.state.controls){
        formData[formElement] = this.state.controls[formElement]
    }

    const order = {
        userData: formData
    }
    let persons = [...this.state.clientes];

    let newPerson = {
      name: order.userData.name.value,
      last_name:  order.userData.last_name.value,
      email:  order.userData.email.value,
    };

    fetch("http://localhost:3030/clients", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8", // Indicates the content
      },
      body: JSON.stringify(newPerson),
    })
      .then((response) => response.json())
      .then((data) => {
        persons.push(data);
        this.setState({ clientes: persons,openModal: false });
      })
      .catch((err) => console.log(err));
  };

  editClientHandler = (id) => {
    console.log("edit", id);
  };

  removeClientHadler = (id) => {
    let persons = [...this.state.clientes];
    let personIndex = persons.findIndex((person) => person.id === id);
    persons.splice(personIndex, 1);

    fetch("http://localhost:3030/clients/" + id, {
      method: "DELETE",
    })
      .then((response) => {
        response.json();
        if (response.status === 200) {
          this.setState({ clientes: persons });
        }
      })
      .catch((err) => console.log(err));
  };
  inputChangedHandler = (event, controlName) => {
    const updateControls = {
        ...this.state.controls,
        [controlName]: {
            ...this.state.controls[controlName],
            value: event.target.value,
            valid: this.checkValidaty(event.target.value, this.state.controls[controlName].validation),
            touched: true
        }
    }
    this.setState({controls: updateControls})
}
  render() {
    let persons = "";
    let itemsCount = 0;
    let modal = "";
    if (this.state.clientes) {
      itemsCount = "Total: " + this.state.clientes.length + " clientes";
      persons = this.state.clientes.map((person, index) => (
        <Client
          number={index + 1}
          key={person.id}
          name={person.name}
          email={person.email}
          clickedEdit={this.editClientHandler.bind(this, person.id)}
          clickedRemove={this.removeClientHadler.bind(this, person.id)}
        />
      ));
    }

    if (this.state.openModal) {
      const formElementsArray = [];
      for (let key in this.state.controls) {
        formElementsArray.push({
          id: key,
          config: this.state.controls[key],
        });
      }

      const form = formElementsArray.map((formElement) => (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={(event) => this.inputChangedHandler(event, formElement.id)}
        />
      ));

      modal = (
        <div className="modal">
          <form onSubmit={(event) => this.addNewClientHandler(event)}>
            <h4 className="title">Nuevo Cliente</h4>
            {form}
            <Button btnType="Success" classes="green fullwidth">
              Crear Nuevo Cliente
            </Button>
            <Button btnType="Dismiss" classes="red fullwidth" clicked={this.closeModalHandler}>
              Cancelar
            </Button>
          </form>
        </div>
      );
    }

    return (
      <div className="Clients">
        <div className="row right">
          <Button classes="green" clicked={this.openModalHandler}>
            Nuevo Cliente
          </Button>
        </div>
        <div className="list-items top">{persons}</div>
        <div className="count-elements" style={{ textAlign: "right" }}>
          {itemsCount}
        </div>
        {modal}
      </div>
    );
  }
}
export default Clients;

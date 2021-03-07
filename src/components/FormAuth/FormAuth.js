import React, {Component} from 'react';
import Input from "../Input/Input";
import Button from "../Button/Button";

import "./FormAuth.css"
class FormAuth extends Component{
    
    submitHandler = (event) =>{
        event.preventDefault()
        console.log("press")
        this.props.isLogged = true
        console.log(this.props)
    }

    inputHandler = (event) => {
        console.log(event.target.value)
    }

    render(){
        return (
            <div className="Form-Auth">
                <form onSubmit={(event) => this.submitHandler(event)}>
                    <Input 
                        changed={this.inputHandler} 
                        elementtype="email" 
                        elementvalue="">Email</Input>
                    <Input 
                        changed={this.inputHandler} 
                        elementtype="text" 
                        elementvalue="">Contraseña</Input>
                    <div className="divider"></div>
                    <Button>Entrar</Button>
                </form>
            </div>
        )
    }
}

export default FormAuth
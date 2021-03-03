import React, {Component} from 'react';
import Input from "../../Input/Input";
import Button from "../../Button/Button";

import "./FormValidation.css"
class FormValidation extends Component{

    submitHandler = () =>{
        console.log("press")
    }
    inputHandler = (event) => {
        console.log(event.target.value)
    }

    render(){
        return (
            <div className="Form-Validation">
                <form onSubmit={this.submitHandler}>
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

export default FormValidation
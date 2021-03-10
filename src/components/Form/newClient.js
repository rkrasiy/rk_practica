import Input from "../Input/Input";
import Button from "../Button/Button"

const newClient = (props) => {
  return (
    <form onSubmit = {props.submited}>
      <Input
        key={1}
        elementType="input"
        elementConfig={{type: "text",placeholder: "Nombre"}}
        value=""
        invalid={false}
        shouldValidate={{required: true, minLength: 4}}
        touched={false}/>
        <Button classes={"blue"}>Aceptar</Button>
    </form>
  )
}

export default newClient
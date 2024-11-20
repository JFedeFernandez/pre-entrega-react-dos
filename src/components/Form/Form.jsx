import { Button, Formulario, Inputs, Labels, TextArea} from "./styled"

const Form = () => {
    return (
        <Formulario>
            <Labels htmlFor="name">Nombre/s</Labels>
            <Inputs type="text" id="name" placeholder="Nombre completo" required></Inputs>

            <Labels htmlFor="apellido">Apellido/s</Labels>
            <Inputs type="text" id="apellido" placeholder="Apellido" required></Inputs>

            <Labels htmlFor="mail">Mail</Labels>
            <Inputs type="email" id="mail" placeholder="email@email.com" required></Inputs>
            
            <Labels htmlFor="mensaje">Mensaje</Labels>
            <TextArea id="message" name="message" placeholder="Tu mensaje aquì..." rows={'5'} required></TextArea>

            <Button>Enviar</Button>
        </Formulario>
    )
}

export default Form
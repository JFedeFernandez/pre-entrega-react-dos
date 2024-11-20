import Form from "../../components/Form/Form"
import { Titulo, Contactos, Parrafo } from './styled'

const parrafos = [
    {text: "¿Quieres saber más sobre nuestros productos artesanales únicos o necesitas ayuda para elegir el regalo perfecto? ¡Estamos aquí para ayudarte!"},
    {text: "En La Celestina, nos apasiona ofrecer objetos artesanales de alta calidad que añadan un toque especial a tu vida."},
    {text: "Ya sea que tengas preguntas sobre nuestros artículos, necesites asesoramiento sobre envíos o simplemente quieras decir hola, ¡nos encantaría escucharte! Puedes contactarnos a través de nuestro formulario en línea, enviarnos un correo electrónico o llamarnos directamente. Estamos comprometidos a brindarte una experiencia de atención al cliente excepcional en cada interacción."},
    {text: "En La Celestina, valoramos tu opinión y estamos aquí para asegurarnos de que encuentres la pieza perfecta que refleje tu estilo y personalidad. ¡Esperamos conectar contigo pronto!"},
    {text: "¡Gracias por elegir La Celestina para descubrir y apreciar la belleza de los objetos artesanales!"}
]

const Contact = () => {
    return (
        <Contactos>
            <Titulo>Contactate con nosotros!</Titulo>
            {parrafos.map((item, index) => (
                <Parrafo key={index}>{item.text}</Parrafo>
            ))}
            <Form></Form>
        </Contactos>
    )
}

export default Contact
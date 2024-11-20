import { CardInformation, ParrafoInformation, PhotoInformation } from "./styled"

const photos = [
    {url: '/zunilda.png', alt: 'Zunilda, artista y creadora en La Celestina', content: '¡Hola! Soy Zunilda, una apasionada del arte con un profundo amor por la creación de belleza en todas sus formas. Desde temprana edad, mi vida ha estado inmersa en la pintura, la cerámica. Explorando y experimentando con cada técnica para dar vida a mis visiones artísticas. Para mí, cada pieza es una extensión de mi alma y un reflejo de mi deseo de compartir emociones y belleza con el mundo. Mi objetivo es ofrecerte obras que no solo decoren tu espacio, sino que también toquen tu corazón y te inspiren. Ya sea que busques una pintura única para tu hogar o un regalo especial para alguien querido, estoy aquí para ayudarte a encontrar esa pieza que resonará contigo. Gracias por visitar nuestro espacio creativo. Espero que encuentres en mis creaciones algo que despierte en ti la misma emoción que siento al hacerlas.',content2: '¡Bienvenidos a nuestro mundo artístico! ', id: 1},
    {url: '/monica.png', alt: 'Mónica, artista y creadora en La Celestina', content: '¡Hola! Soy Mónica, una entusiasta del arte que encuentra su verdadera pasión en explorar diversas formas de expresión creativa. Desde que era joven, el arte ha sido mi refugio y mi modo de comunicarme con el mundo. Me encanta trabajar en la pintura, la costura, y manualidades, buscando siempre nuevas maneras de compartir la belleza que veo en mi entorno. Si estás en busca de una pieza especial para adornar tu hogar o un regalo que transmita un mensaje significativo, estaré encantada de asistirte. Gracias por adentrarte a nuestro universo creativo. Espero que encuentres en mis obras la misma chispa de alegría y reflexión que yo experimenté al crearlas. ',content2: '¡Bienvenidos a nuestro espacio artístico!', id: 2}
]

const AboutMe = () => {
    return (
        <>
            {photos.map(item => (
                <CardInformation key={item.id}>
                    <PhotoInformation src={item.url} alt={item.alt}/>
                    <ParrafoInformation>
                        {item.content}
                        <br/>
                        {item.content2}
                    </ParrafoInformation>
                </CardInformation>
            ))}
        </>
    )
}

export default AboutMe
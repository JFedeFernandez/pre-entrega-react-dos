import ControlledCarousel from "../../components/Carousel/ControlledCarousel"
import Ubicacion from "../../components/Ubicacion/Ubicacion"
import Info from "../../components/Info/Info"
import { MainContainer, Titulo } from "./styled"

const Home = () => {
    return (
        <MainContainer>
            <Titulo>La Celestina</Titulo>
            <ControlledCarousel/>
            <Ubicacion/>
            <Info/>
        </MainContainer>
    )
}   

export default Home
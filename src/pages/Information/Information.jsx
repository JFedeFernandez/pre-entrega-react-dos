import { MainInformation, Titulo } from './styled'
import AboutMe from '../../components/AboutMe/AboutMe'

const Information = () => {
    return (
        <>
            <MainInformation>
                <Titulo>Sobre Nosotras</Titulo>
                <AboutMe/>
            </MainInformation>
        </>
    )
}

export default Information
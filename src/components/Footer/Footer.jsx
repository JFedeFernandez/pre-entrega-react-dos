import { ContainerFooter, UlList, LiList, AnclaRedes, Parrafo } from "./styled"
import { FaXTwitter, FaFacebook, FaInstagram } from 'react-icons/fa6'

const items = [
    {id: 1, text: 'Instagram'},
    {id: 2, text: 'X'},
    {id: 3, text: 'Facebook'}
]

const Footer = () => {

    return (
        <ContainerFooter>
            <UlList>
                {items.map(item => (
                    <LiList key={item.id}>
                        <AnclaRedes href="#">
                            {item.text === 'X' && <FaXTwitter/>}
                            {item.text === 'Facebook' && <FaFacebook/>}
                            {item.text === 'Instagram' && <FaInstagram/>}
                        </AnclaRedes>
                    </LiList>
                ))}
            </UlList>
            <Parrafo>
                &copy; 2024 La Celestina.
            </Parrafo>
        </ContainerFooter>
    )
}

export default Footer
import { ContainerHeader, NavContainer, Logo, UnorderedList, ListIndex, StyledLink } from "./styled";
import { FaHouse,FaRegImage,FaCartShopping,FaRegEnvelope,FaCircleInfo } from "react-icons/fa6";
import PropTypes from 'prop-types'
import { useState } from "react";

const Header = ({allProducts, setAllProducts, countProducts, setCountProducts}) => {
    const [active, setActive] = useState(false)

    return (
        <ContainerHeader>
            <NavContainer>
                <Logo src="./src/assets/logo.webp" alt="Logo La Celestina"/>
                <UnorderedList>
                    <ListIndex>
                        <StyledLink to='/'><FaHouse style={{ marginRight: 5 }}/>Inicio</StyledLink>
                    </ListIndex>
                    <ListIndex>
                        <StyledLink to='/Fotos'><FaRegImage style={{ marginRight: 5 }} />Fotos</StyledLink>
                    </ListIndex>
                    <ListIndex>
                        <StyledLink to='/Productos'><FaCartShopping style={{ marginRight: 5 }} />Productos</StyledLink>
                    </ListIndex>
                    <ListIndex>
                        <StyledLink to='/Nosotras'><FaCircleInfo style={{ marginRight: 5 }} />Nosotras</StyledLink>
                    </ListIndex>
                    <ListIndex>
                        <StyledLink to='/Contacto'><FaRegEnvelope style={{ marginRight: 5 }} />Contacto</StyledLink>
                    </ListIndex>
                    <ListIndex>
                        <StyledLink onClick={()=>{setActive(!active)}}><span>{countProducts}</span><FaCartShopping style={{ marginRight: 5 }}/></StyledLink>
                    </ListIndex>
                </UnorderedList>
            </NavContainer>
        </ContainerHeader>
    )
}

Header.propTypes = {
    allProducts: PropTypes.array.isRequired,
    setAllProducts: PropTypes.func.isRequired,
    countProducts: PropTypes.number.isRequired,
    setCountProducts: PropTypes.func.isRequired,
}

export default Header;
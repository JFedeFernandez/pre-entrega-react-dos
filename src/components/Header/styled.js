import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerHeader = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: auto;
    background-color: #546194;
    align-content: center;
    padding: 10px 20px;
    z-index: 1000;
`;

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 300px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-content: center;
    }

    @media screen and (max-width: 400px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-content: center;
    }

    @media screen and (max-width: 1132px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0px 10px 70px 10px;
    }

`;

export const UnorderedList = styled.ul`
    display: flex;
    align-self: center;
    margin-bottom: 0;
    padding-left: 0;
    width: 100%;

    @media screen and (max-width: 300px) {
        display: none;
        position: fixed;
        width: 100%;
        height: 100%;
        background: #546194;
        text-align: center;
        align-content: center;
    }

    @media screen and (max-width: 400px) {
        display: none;
        position: fixed;
        width: 100%;
        height: 100%;
        background: #546194;
        text-align: center;
        align-content: center;
    }
`;

export const ListIndex = styled.li`
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    margin: 20px auto;
    list-style: none;

    &:hover {
        transform: translateY(-10px); /* Efecto de levantar al pasar el mouse */
    }

    @media screen and (max-width: 1132px) {
        margin: 20px auto;
        list-style: none;
    }
`;

export const AnclaIndex = styled.div`
    display: flex;
    color: #E6FBD1;
    font-size: large;
    margin: 40px;
    text-decoration: none;
    align-items: center;

    &:hover{
        color: #E6FBD1;
        letter-spacing: 2px;
    }

    @media screen and (max-width: 1132px) {
        align-items: center;
        margin: 0 auto;
    }
`;

export const Logo = styled.img`
    border-radius: 300px;
    width: 150px;
`;

export const StyledLink = styled(Link)`
    display: flex;
    color: #E6FBD1;
    font-size: large;
    margin: 40px;
    text-decoration: none;
    align-items: center;

    &:hover{
        color: #E6FBD1;
        letter-spacing: 2px;
    }

    @media screen and (max-width: 1132px) {
        align-items: center;
        margin: 0 auto;
    }
`
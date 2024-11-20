import styled from 'styled-components'

export const ContainerFooter = styled.footer`
    display: grid;
    grid-template-columns: 33% 33% 33%;
    bottom: 0;
    width: 100%;
    height: 40px;
    background-color: #546194;
    justify-content: center;
    align-items: center;
`

export const UlList = styled.ul`
    display: flex;
    flex-direction: row;
    align-self: center;
    padding-left: 0;
    margin: 0;
`

export const LiList = styled.li`
    list-style: none;
    margin: 0 15px;
`

export const AnclaRedes = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #E6FBD1;
`

export const Parrafo = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0;
    color: #E6FBD1;
`
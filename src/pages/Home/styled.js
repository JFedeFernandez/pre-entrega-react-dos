import styled from 'styled-components'

export const MainContainer = styled.main`
    display: grid;
    grid-template-areas: 
    'titulo titulo'
    'carousel carousel'
    'mapa info';
    grid-template-columns: 1fr 1fr;
    align-items: center;
    row-gap: 40px;
    column-gap: 30px;
    margin: 60px 20px;

    @media screen and (max-width: 300px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0px 10px 70px 10px;
    }

    @media screen and (max-width: 400px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0px 10px 70px 10px;
    }
`

export const Titulo = styled.h1`
    font-weight: 400;
    grid-area: titulo;
    text-align: center;
    margin-top: 40px;
    color: #1E3309;
`
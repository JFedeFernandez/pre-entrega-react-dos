import styled from 'styled-components'

export const CardInformation = styled.div`
    display: grid;
    grid-template-columns: 400px auto;
    justify-content: center;
    margin: 40px 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
        transform: translateY(-10px); /* Efecto de levantar al pasar el mouse */
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3); /* Sombra más suave */
    }

    @media only screen and (max-width: 1132px) {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        margin-bottom: 70px;
    }

    @media only screen and (max-width: 742px) and (min-width: 400px) {
        margin-bottom: 70px;
    }
`

export const PhotoInformation = styled.img`
    width: 100%;
    height: auto;
    max-width: 100%;
    padding: 20px;

    @media only screen and (max-width: 1132px) {
        margin: 20px auto;
        width: 100%;
        height: auto;
    }
`

export const ParrafoInformation = styled.p`
    font-family: $font-global;
    color: $verde-oscuro;
    line-height: 50px;
    padding: 20px;
    font-size: 20px;
`
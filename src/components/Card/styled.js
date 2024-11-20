import styled from 'styled-components'

export const Titulo = styled.h1`
    text-align: center;
    margin-top: 40px;
    color: #1E3309;
`

export const BoxArticulos = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    column-gap: 40px;
    row-gap: 40px;
    margin: 40px auto;
`

export const Articulos = styled.article`
    display: grid;
    grid-template-areas:
    'foto'
    'titulo'
    'subtitulo'
    'parrafo'
    'boton';
    grid-template-columns: 1fr;
    align-items: center;
    width: 350px;
    height: auto;
    text-align: center;
    border-radius: 20px;
    padding: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background-color: #E6FBD1;
    

    &:hover {
        transform: translateY(-10px); /* Efecto de levantar al pasar el mouse */
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3); /* Sombra más suave */
    }
`

export const TituloCard = styled.h2`
    grid-area: titulo;
    margin: 0px;
    color: #1E3309;
    width: 100%;

`

export const ContenidoCard = styled.p`
    grid-area: parrafo;
    text-align: center;
    font-style: italic;
    margin: 10px auto;
    color: #545C4C;
    width: 100%;
`
export const LinkBuy = styled.a`
    grid-area: boton;
    text-decoration: none;
    color: #E6FBD1;
    background-color: #546194;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 5px;
    
    &:hover{
        color: #E6FBD1;
    }
`

export const Img = styled.img`
    grid-area: foto;
    width: 300px;
    height: 200px;
    justify-self: center;
`
export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 10px;
`
export const ModalHeader = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;

    .modal-header{
        display: flex;
        flex-direction: row;
        width: 100%;
    }
`
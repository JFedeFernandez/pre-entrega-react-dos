import styled from 'styled-components'

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    margin: 30px 0;
    width: 500px;
`

export const Labels = styled.label`
    color: #1E3309;
    font-weight: bold;
    width: 100%;
`

export const Inputs = styled.input`
    width: 100%;
    height: 30px;
    margin: 10px auto;
    
    &:focus {
        outline: none;
        box-shadow: 0 0 10px rgba(84,97,148,0.4);
        border: 2px solid #546194;
    }
`

export const TextArea = styled.textarea`
    width: 100%;
    height: 100px;
    margin: 10px auto;

    &:focus {
        outline: none;
        box-shadow: 0 0 10px rgba(84,97,148,0.4);
        border: 2px solid #546194;
    }
`

export const Button = styled.button`
    width: 90px;
    height: 30px;
    background-color: #546194;
    border: none;
    border-radius: 10px;
    color: #E6FBD1;
`
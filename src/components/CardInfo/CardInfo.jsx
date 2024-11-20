import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MainInfo, Parrafo, Price, Title, Div } from './styled';

const CardInfo = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setProduct(json));
    }, [id]);

    if (!product) return <p>Cargando...</p>;

    return (
        <MainInfo>
            <Div>
                <Title>{product.title}</Title>
                <img src={product.image} alt={product.title} />
                <Parrafo>{product.description}</Parrafo>
                <Price>Price: ${product.price}</Price>
            </Div>
        </MainInfo>
    )
}

export default CardInfo
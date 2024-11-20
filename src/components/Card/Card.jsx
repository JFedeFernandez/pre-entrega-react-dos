import { Img, Articulos, BoxArticulos, ContenidoCard, LinkBuy, Titulo, TituloCard} from "./styled";
import { FaCartShopping } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'

const Card = ({allProducts, setAllProducts, setCountProducts}) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json));
    }, []);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategories(json))
    })

    const handleClick = (product) => {
        navigate(`/Productos/${product.id}`);
    };
    
    const addProduct = (product) => {
        if (allProducts.find(item => item.id === product.id)) {
            const aux = 0
            const productss = allProducts.map( item =>
                item.id === product.id 
                ? {...item, quantity: aux+1} 
                : item)

            return setAllProducts([...productss])
        }

        setAllProducts((prevProducts) => {
            const updatedProduct = [...prevProducts,product]
            setCountProducts(updatedProduct.length)
            return updatedProduct
        })
    }

    const handleCategories = (category) => {
        setSelectedCategory(category)
    };

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    return (
        <>
            <Titulo>Productos</Titulo>
            <select onChange={ (e) => handleCategories(e.target.value)}>
                <option value="">Todas las categorías</option>
                {categories?.map((item) => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
            <BoxArticulos>
                {filteredProducts?.map((item) => (
                    <Articulos key={item.id}>
                        <Img src={item.image} />
                        <TituloCard>{item.title}</TituloCard>
                        <ContenidoCard>${item.price}</ContenidoCard>
                        <a href="#" style={{textDecoration: 'none'}} onClick={(e) => { e.preventDefault(); handleClick(item); }}>Ver más..</a>
                        <LinkBuy onClick={()=> {addProduct(item)}}><FaCartShopping/>Comprar</LinkBuy>
                    </Articulos>
                ))}
            </BoxArticulos>
        </>
    );
};

Card.propTypes = {
    allProducts: PropTypes.array.isRequired,
    setAllProducts: PropTypes.func.isRequired,
    countProducts: PropTypes.number.isRequired,
    setCountProducts: PropTypes.func.isRequired,
};

export default Card;

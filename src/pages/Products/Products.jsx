import Card from "../../components/Card/Card"
import { MainProducts } from "./styled"
import PropTypes from 'prop-types'

const Products = ({allProducts, setAllProducts, countProducts, setCountProducts}) => {
    return (
        <MainProducts>
            <Card allProducts={allProducts} setAllProducts={setAllProducts} countProducts={countProducts} setCountProducts={setCountProducts}/>
        </MainProducts>
    )
}

Products.propTypes = {
    allProducts: PropTypes.array.isRequired,
    setAllProducts: PropTypes.func.isRequired,
    countProducts: PropTypes.number.isRequired,
    setCountProducts: PropTypes.func.isRequired,
};
export default Products
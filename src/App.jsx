import { useState } from 'react'
import Footer from "./components/Footer/Footer"
import Header from "./components/Header"
import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"
import Information from "./pages/Information/Information"
import Contact from "./pages/Contact/Contact"
import CardInfo from "./components/CardInfo/CardInfo"
import Error from "./components/Error/Error"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { MainContent } from './styled'

function App() {

  const [allProducts, setAllProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [countProducts, setCountProducts] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
        <MainContent>
        <Routes>
          <Route exact path="/">
            <Route index element={<Home/>}/>
            <Route exact path="Nosotras" element={<Information/>}/>
            <Route exact path="Productos" element={
              <Products allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
              />
            }/>
            <Route exact path="Productos/:id" element={<CardInfo/>}/>
            <Route exact path="Contacto" element={<Contact/>}/>
            <Route path='*' element={<Error/>}/>
          </Route>
        </Routes>
        </MainContent>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App

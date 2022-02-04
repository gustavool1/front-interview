import { useContext } from "react"
import React from "react"
import Product from "../Product"
import { Container } from "../ProductsContainer/style"
import { ProductsContext } from "../../providers/Products"

const ProductsContainer = () =>{
    const { products} = useContext(ProductsContext)
    return(
        <Container>
            { React.Children.toArray(
                products.map((product)=>(
                    <Product product={product}/>
                ))
            )}
        </Container>
    )
}

export default ProductsContainer    
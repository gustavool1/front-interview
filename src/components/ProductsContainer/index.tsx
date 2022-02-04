import { useContext, useState } from "react"
import React from "react"
import Product from "../Product"
import { Container } from "../ProductsContainer/style"
import { ProductsContext } from "../../providers/Products"
import { useEffect } from "react"

const ProductsContainer = () =>{
    const {getProducts, products} = useContext(ProductsContext)
    

    useEffect(()=>{
        if (products.length === 0) {
            getProducts()
        }
        
    },[products])
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
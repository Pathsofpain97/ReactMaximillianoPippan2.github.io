import { useEffect, useState } from "react"

import { products } from "../data/products"

export const useProduct = ({ id , type }) => {
    const [Allproducts, setProducts] = useState([])

    useEffect(() => {
        if (!id) return setProducts(products)
        
        if (type !== 'category') {
            const filterProduct = products.find(product => product.id === id)
            return setProducts(filterProduct)
        }

        const filterProduct = products.filter(product => product.category === id)
        return setProducts(filterProduct)

    }, [id, type])

    return Allproducts
};
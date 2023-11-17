import { useParams } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react'
import { Item } from "./Item";
import { useProduct } from "../hooks/useProduct";
import '../styles/hamburger.css'

export const ItemListContainer = (props) => {
    const { id } = useParams()
    const URL = window.location.href
    const type = URL.split('/')
  
    const [modifiedProducts, setModifiedProducts] = useState([])
    const allProducts = useProduct({ id , type: type.at(-2) })

    useEffect(() => {
      const id = setTimeout (() => {
        setModifiedProducts(allProducts)
      }, 2000);
    
      return () => {
        clearTimeout(id)
      }
    }, [allProducts]);

    return (
      <Container className='mt-4'>
        <h1 className="text-center mb-4">{props.greeting}</h1>
        <div className="hamburger-list">
          {
            modifiedProducts.map( item => <Item key={item.id} item={item} /> )
          }
        </div>
      </Container>
    );
};

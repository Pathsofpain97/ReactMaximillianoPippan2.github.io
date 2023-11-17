import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useProduct } from "../hooks/useProduct";

export function DetailsProduct() {
    const { id } = useParams()
    const Allproducts = useProduct({ id })

    return (
        <Container className='pc mt-4'>
            <h1 className="pct">{Allproducts.title}</h1>
            <p className="pctx1">{Allproducts.description}</p>
            <p className="pctx1">${Allproducts.price}</p>
            <div className="dimg text-center">
            <img className="img" src={Allproducts.imagen} alt={Allproducts.title} />
            </div>
        </Container>
    );
}

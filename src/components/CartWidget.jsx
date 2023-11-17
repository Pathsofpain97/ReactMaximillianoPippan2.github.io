import cart from '../assets/carrito.png'

export const CartWidget = () => {

    return (
    <>
        <img src={cart} alt="Carrito" width={60} />
        <span>3</span>
    </>
    );
};
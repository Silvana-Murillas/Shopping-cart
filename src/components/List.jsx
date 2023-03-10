import { useCart } from './hook/useCart';
import './List.css';

export default function List({ products }) {
    const { addProduct, cart, removeProduct } = useCart();

    const ProductInCar = (product) => {
        console.log(cart);
        return cart.some((item) => item.id === product.id);
    };
    return (
        <ul>
            {' '}
            {products &&
                products.map((p) => {
                    const isProductInCar = ProductInCar(p);

                    return (
                        <li key={p.id} className="card">
                            <h2>{p.title}</h2>
                            <img src={p.thumbnail} alt={p.title} />{' '}
                            <p>{p.description}</p>
                            <div className="price">
                                {' '}
                                <label>Price :</label>
                                <p>{p.price}</p>
                            </div>
                            <button
                                onClick={() =>
                                    isProductInCar
                                        ? removeProduct(p)
                                        : addProduct(p)
                                }
                            >
                                {isProductInCar ? '🗑️ ' : '🛒'}
                            </button>
                        </li>
                    );
                })}
        </ul>
    );
}

import { useCart } from './hook/useCart';

export default function List({ products }) {
    const { addProduct, cart, removeProduct } = useCart();

    const ProductInCar = (product) => {
        return cart.some((item) => item.id === product.id);
    };
    return (
        <ul className="grid grid-cols-16 w-11/12 gap-8 justify-items-center place-content-center p-0 m-auto">
            {' '}
            {products &&
                products.map((p) => {
                    const isProductInCar = ProductInCar(p);

                    return (
                        <li
                            key={p.id}
                            className="flex flex-col justify-around items-center text-center  w-52 rounded-xl border-black shadow-lg shadow-white bg-zinc-900 sm:w-72 "
                        >
                            <h2 className="text-3xl">{p.title}</h2>
                            <img
                                className="w-full min-w-full rounded-md "
                                src={p.thumbnail}
                                alt={p.title}
                            />{' '}
                            <p>{p.description}</p>
                            <div className="flex gap-1.5 ">
                                {' '}
                                <label>Price :</label>
                                <p className="m-0">{p.price}</p>
                            </div>
                            <button
                                onClick={() =>
                                    isProductInCar
                                        ? removeProduct(p)
                                        : addProduct(p)
                                }
                                className="rounded-lg border border-solid py-2 px-2 text-base font-medium bg-stone-900 border-transparent cursor-pointer transition hover: border-neutral-600 focus focus-visible"
                            >
                                {isProductInCar ? '🗑️ ' : '🛒'}
                            </button>
                        </li>
                    );
                })}
        </ul>
    );
}

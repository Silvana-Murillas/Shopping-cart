import { useId } from 'react';

import { useCart } from './hook/useCart';

export function Cart() {
    const car = useId();
    const { cart, clearProduct, addProduct } = useCart();
    return (
        <div className=" absolute z-10 flex flex-col items-end ">
            <div className="w-screen text-end mt-1">
                <label
                    className=" mr-5 bg-sky-800 text-2xl rounded"
                    htmlFor={car}
                >
                    🛒
                </label>
            </div>
            <input id={car} type="checkbox" hidden class="peerchecked"></input>
            <aside className="hidden peer-[checked]:peer-checked:block bg-black text-center rounded-md shadow-lg shadow-white w-fit mr-8  ">
                <ul className="flex flex-col items-center justify-center">
                    {cart.map((p) => (
                        <li key={p.id}>
                            <img
                                src={p.thumbnail}
                                alt="iphone"
                                className="w-28 h-24 m-auto mt-1.5 mb-2"
                            />
                            <div>
                                <strong>{p.title}</strong> $ {p.price}
                            </div>
                            <footer>
                                <small>Quantity: {p.quantity}</small>
                                <button
                                    className="bg-slate-400 font-bold text-2xl ml-2 rounded w-fit h-7 text-center"
                                    onClick={() => addProduct(p)}
                                >
                                    +
                                </button>
                            </footer>
                        </li>
                    ))}
                </ul>
                <br />
                <hr />
                {cart.length ? (
                    <button onClick={() => clearProduct()}>
                        🗑️ clear cart
                    </button>
                ) : (
                    ''
                )}
            </aside>
        </div>
    );
}

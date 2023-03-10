import { useContext, useState } from 'react';
import reactLogo from './assets/react.svg';
import { products } from './mocks/products.json';
import List from './components/List';
import './App.css';
import Header from './components/Header';
import { FilterContext } from './context/filter';
import { CartProvider } from './context/cart.jsx';
import { Cart } from './components/Cart.jsx';

export function useFilters() {
    // const [filter, setFilters] = useState({ category: 'all', price: 0 });
    const { filter, setFilters } = useContext(FilterContext);
    const filters = (product) => {
        return product.filter((p) => {
            return (
                p.price >= filter.price &&
                (filter.category === 'all' || filter.category === p.category)
            );
        });
    };

    return { filters, setFilters, filter };
}

function App() {
    const { filters } = useFilters();

    return (
        <CartProvider>
            <div className="app">
                <Cart />
                <Header />

                <List products={filters(products)}></List>
            </div>
        </CartProvider>
    );
}

export default App;

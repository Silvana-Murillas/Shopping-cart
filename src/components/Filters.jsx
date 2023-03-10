import { useContext } from 'react';
import { useState, useId } from 'react';
import { useFilters } from '../App';
import { FilterContext } from '../context/filter';
import './Filters.css';
export default function Filters() {
    // const [minRange, setMinPrice] = useState(0);
    const { filter, setFilters } = useFilters();
    const minPriceFilterId = useId();
    const categoryFilterId = useId();
    const handlerMinPrice = (e) => {
        // setMinPrice(e.target.value);
        setFilters((prev) => ({ ...prev, price: e.target.value }));
    };

    const handlerCategory = (e) => {
        setFilters((prev) => ({ ...prev, category: e.target.value }));
    };
    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Price greater than...</label>{' '}
                <input
                    type="range"
                    id={minPriceFilterId}
                    min="0"
                    max="1000"
                    onChange={handlerMinPrice}
                    value={filter.price}
                />
                <span>{filter.price}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Category</label>{' '}
                <select id={categoryFilterId} onChange={handlerCategory}>
                    <option value="all">All categories</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                    <option value="fragrances">Fragances</option>
                </select>
            </div>
        </section>
    );
}

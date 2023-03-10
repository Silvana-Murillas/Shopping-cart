import { useContext } from 'react';
import { cartContext } from '../../context/cart';
export function useCart() {
    const context = useContext(cartContext);
    console.log('context', context);
    if (context === undefined) {
        throw new Error('useCart must be used within a cartProvider');
    }
    return context;
}

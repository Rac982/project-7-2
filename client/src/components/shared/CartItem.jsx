import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../../store/slices/cartSlice';
import { setCurrentProduct } from '../../store/slices/productSlice';
import CustomImage from './CustomImage';

/**
 * Componente che rappresenta un singolo prodotto nel carrello.
 * 
 * Permette all'utente di:
 * - Aumentare o diminuire la quantità del prodotto.
 * - Rimuovere completamente il prodotto dal carrello.
 * 
 * Tutte le azioni aggiornano lo stato globale di Redux tramite il cartSlice.
 * 
 * @param {Object} props - Proprietà del componente.
 * @param {string} props._id - ID univoco del prodotto.
 * @param {string} props.name - Nome del prodotto.
 * @param {number} props.price - Prezzo unitario del prodotto.
 * @param {number} props.quantity - Quantità del prodotto nel carrello.
 * @param {string} props.image - Percorso o URL dell'immagine del prodotto.
 */
const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const { _id, quantity } = item;

    /**
     * Aumenta la quantità del prodotto di 1 unità.
     * Usa updateQuantity perché deve sovrascrivere il valore esatto,
     * non sommare come farebbe addToCart.
     */
    const handleIncrease = () => {
        dispatch(updateQuantity({ _id, quantity: quantity + 1 }));
    };

    /**
     * Diminuisce la quantità del prodotto.
     * Se la quantità diventa 0, rimuove l'articolo dal carrello.
     */
    const handleDecrease = () => {
        if (quantity > 1) {
            dispatch(updateQuantity({ _id, quantity: quantity - 1 }));
        } else {
            dispatch(removeFromCart({ _id }));
        }
    };

    /**
     * Rimuove completamente il prodotto dal carrello.
     */
    const handleRemove = () => {
        dispatch(removeFromCart({ _id }));
    };

    const selectCurrentProduct = (product) => {
        dispatch(setCurrentProduct(product));
    }

    return (
        <div key={item._id} className="bg-white mb-4 p-3 rounded-2xl shadow-sm flex gap-4">
            <CustomImage 
                onClick={() => selectCurrentProduct(item)}
                src={item.image}
                alt={item.name}
                className="w-[88px] h-[88px] rounded-2xl object-cover"
            />
            <div className="flex flex-col justify-between flex-1">
                <div>
                    <h3 className="font-semibold text-base text-[#111827]" onClick={() => selectCurrentProduct(item)}>{item.name}</h3>
                    <p className="text-sm text-gray-500">Quantità: {item.quantity}</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                    <button
                        onClick={handleDecrease}
                        className="w-7 h-7 rounded-full bg-[#FFEAEA] text-red-500 font-bold"
                    >−</button>
                    <span className="text-sm font-medium">{item.quantity}</span>
                    <button
                        onClick={handleIncrease}
                        className="w-7 h-7 rounded-full bg-[#D1FAE5] text-green-600 font-bold"
                    >+</button>
                </div>
            </div>
            <div className="flex flex-col items-end justify-between">
                <p className="text-sm font-medium text-gray-700">
                    {(parseFloat(item.price) * item.quantity).toFixed(2)}€
                </p>
                <button
                    onClick={handleRemove}
                    className="text-xs text-red-600 mt-1"
                >Rimuovi</button>
            </div>
        </div>
    );
};

export default CartItem;

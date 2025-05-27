import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart, updateCartStatus } from "../../store/slices/cartSlice";
import CartItem from "../../components/shared/CartItem";
import { useToast } from "../../hooks/useToast";

/**
 * Pagina del carrello che mostra l'elenco dei prodotti selezionati dall'utente.
 *
 * - Permette di modificare le quantità (+ / −) o rimuovere articoli singolarmente.
 * - Calcola automaticamente il totale, le tasse (10%) e il costo servizio.
 * - Permette l'invio dell'ordine, svuotando il carrello e mostrando un toast di conferma.
 *
 * Utilizza Redux per gestire lo stato del carrello.
 */
const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { items, isOpen } = useSelector((state) => state.cart); // Lista articoli nel carrello

  /**
   * Calcolo del subtotale: somma di (prezzo * quantità) per ogni articolo.
   * parseFloat evita problemi in caso di prezzo stringa o assente. (NaN, null, undefined)
   * Estraiamo la quantità dell’articolo. Se non esiste o è falsy,
   * la impostiamo a 0. Anche qui evitiamo errori o moltiplicazioni errate.
   * Calcoliamo il costo totale per quell’articolo (prezzo × quantità) e lo
   * aggiungiamo al sum corrente. Questo viene fatto per ogni elemento dell’array.
   * 0); è il valore iniziale di sum, cioè il punto di partenza per l'accumulatore.
   * Alla fine del reduce, subtotal conterrà il totale parziale di tutti i prodotti (prima di tasse e servizi).
   */
  const subtotal = items.reduce((sum, item) => {
    const itemPrice = parseFloat(item.price) || 0;
    const itemQty = item.quantity || 0;
    return sum + itemPrice * itemQty;
  }, 0);

  // Calcoli aggiuntivi
  const tasse = subtotal * 0.1; // 10% di tasse
  const servizio = 2; // Servizio fisso
  const totale = subtotal + tasse + servizio; // Totale finale

  /**
   * Gestione invio ordine:
   * - Mostra il toast.
   * - Pulisce il carrello.
   * - Dopo 2 secondi, naviga alla pagina /categories.
   */
  const handleSubmitOrder = () => {
    dispatch(updateCartStatus(false));
    toast.success("Il tuo ordine è stato inviato!");
    navigate("/private/payments");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white mx-auto max-w-[23.4375rem] w-full font-sans">
      {/* HEADER */}
      <div className="flex pt-4 pl-4 pb-5 pr-3 items-center bg-white w-[23.4375rem] gap-5">
        <img
          className="cursor-pointer"
          src="/images/Component1.svg"
          alt="arrow"
          onClick={() => navigate("/private/categories")}
        />
        <h1 className="w-full font-semibold text-md">Riepilogo ordine</h1>
      </div>

      {/* CONTENUTO CARRELLO */}
      <div
        className="flex flex-col items-center w-[375px] px-4 pb-24 rounded-t-3xl bg-white w-full h-10"
        style={{
          boxShadow: "0 -3px 12px -5px rgba(0, 0, 0, 0.18)",
        }}
      >
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center bg-white w-full mt-20 text-center p-6 rounded-2xl shadow-sm">
            <img
              src="/images/empty-cart.jpg"
              alt="carrello vuoto"
              className="w-40 h-40 mb-4"
            />
            <p className="text-gray-500 text-base font-medium">
              Il tuo carrello è vuoto
            </p>
            <button
              onClick={() => navigate("/private/categories")}
              className="mt-6 bg-[#3BC8E1] text-white px-5 py-2 rounded-full text-sm font-medium"
            >
              Torna al menu
            </button>
          </div>
        ) : (
          <div className="w-full mt-4">
            {items.map((item) => (
              <CartItem item={item} key={item._id} />
            ))}

            {/* RIEPILOGO TOTALE */}
            <div className="text-sm text-gray-600 px-1 mt-2">
              <div className="flex justify-between mb-1">
                <span>Subtotale:</span>
                <span>{subtotal.toFixed(2)}€</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>Tasse (10%):</span>
                <span>{tasse.toFixed(2)}€</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>Servizio:</span>
                <span>{servizio.toFixed(2)}€</span>
              </div>
              <div className="flex justify-between font-semibold text-[#111827] text-base mt-2">
                <span>Totale:</span>
                <span>{totale.toFixed(2)}€</span>
              </div>
            </div>

            {/* BOTTONI */}
            <div className="mt-5 w-full flex flex-col gap-3">
              <button
                onClick={handleSubmitOrder}
                disabled={items.length == 0}
                className={`w-full h-[42px] rounded-full text-white text-[15px] font-semibold flex items-center justify-center gap-2 transition
                                 ${
                                   items.length == 0
                                     ? "bg-[#A0DDE6] cursor-not-allowed"
                                     : "bg-[#3BC8E1]"
                                 }`}
              >
                <img
                  src="/images/Pluswhite.svg"
                  alt="plus"
                  className="w-5 h-5"
                />
                Invia ordine
              </button>

              <button
                onClick={() => navigate("/private/categories")}
                className="w-full border border-[#3BC8E1] h-[42px] rounded-full text-[#3BC8E1] text-[15px] font-semibold flex items-center justify-center gap-2"
              >
                Torna al menu
              </button>

              <button
                onClick={() => dispatch(clearCart())}
                className="w-full border border-red-300 h-[42px] rounded-full text-red-500 text-[15px] font-semibold flex items-center justify-center gap-2"
              >
                Svuota carrello
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CustomImage from "../shared/CustomImage";
import Menu from "../shared/Menu";
/**
 * Componente Navbar principale dell'app lato utente.
 *
 * Funzionalità:
 * - Mostra il logo del ristorante con link alla home (`/private`).
 * - Mostra l'icona del carrello con un badge che indica la quantità totale degli articoli.
 *   Il badge appare solo se il carrello contiene almeno un articolo.
 * - Mostra il menu laterale cliccando sull'icona `Menu.png`.
 * 
 * Stato interno:
 * - `selectMenu`: booleano per aprire/chiudere il menu laterale.
 * 
 * Redux:
 * - Estrae dal `cartSlice` l'array `items` per calcolare la quantità totale (`totalQuantity`)
 *   sommando le `item.quantity`.
 */

const Navbar = () => {
  const [selectMenu, setSelectMenu] = useState(false);
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => {
    setSelectMenu((p) => !p);
  };

  return (
    <nav className="flex justify-center w-full h-[66px] relative z-20">
      <div className="flex items-center justify-between min-w-[375px]  bg-primary px-5 relative">
        <div>
          <Link to="/private">
            <CustomImage src="/images/logo-restaurant2.svg" alt="logo" />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <Link to="/private/cart">
              <CustomImage src="/images/Vector.png" alt="cart" />
              {totalQuantity > 0 && (
                <span className="absolute -top-1 mr-14 mt-3.5 -right-1 bg-[#FFFFFF] text-[#3BC8E1] text-[10px] w-4 h-4 rounded-full font-bold flex items-center justify-center leading-none">
                  {totalQuantity}
                </span>
              )}
            </Link>
          </div>
          <div className="cursor-pointer flex justify-end items-center">
            <div onClick={toggleMenu}>
              <CustomImage src="/images/Menu.png" alt="menu" />
            </div>
            {selectMenu && <Menu />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
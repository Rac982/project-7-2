import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useToast } from '../hooks/useToast';
import { useSelector } from "react-redux";

/**
 * Componente `ConfirmPayment`
 * 
 * Descrizione:
 * Mostra una schermata di conferma dopo il pagamento con un'interfaccia per inviare un feedback.
 * Consente all’utente di:
 * - visualizzare un messaggio di conferma del pagamento,
 * - assegnare una valutazione da 1 a 5 stelle,
 * - scrivere un commento testuale (textarea),
 * - inviare il feedback al server tramite una richiesta POST autenticata.
 *
 * Funzionalità:
 * - Usa Redux per ottenere il token JWT dell’utente loggato.
 * - Usa `fetch()` per inviare la recensione (token + dati) all'endpoint `/api/reviews`.
 * - Mostra notifiche di successo o errore con `useToast`.
 * - Dopo l’invio, reindirizza automaticamente alla pagina `/private/categories`.

 * Tecnologie:
 * - React (useState, useNavigate)
 * - Redux Toolkit (useSelector)
 * - Custom Hook `useToast`
 * 
 * Autenticazione:
 * - L’endpoint richiede un token (`Authorization: Bearer <token>`) per essere accettato.
 *
 * Dati inviati al server:
 * {
 *   user: string,      // ID del destinatario della recensione (ristoratore)
 *   content: string,   // Testo inserito dall'utente nella textarea
 *   table: number,     // Numero del tavolo (random da 1 a 20)
 *   rating: number     // Voto da 1 a 5
 * }
 */


export default function ConfirmPayment() {
    const [rating, setRating] = useState(0);
    const navigate = useNavigate();
    const { toast } = useToast();

    const { token } = useSelector((state) => state.auth);
    const [content, setContent] = useState(""); // textarea
    const restaurantOwnerId = "6809247099bda8ef6880c799"; // ID statico per test
    const tableNumber = Math.floor(Math.random() * 20) + 1; // numero tavolo random da 1 a 20 (test)

    const handleSubmitOrder = async () => {
        try {
            const response = await fetch("/api/reviews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, 
                },
                body: JSON.stringify({
                    user: restaurantOwnerId,
                    content,
                    table: tableNumber,
                    rating,
                }),
            });

            if (!response.ok) throw new Error("Errore durante l'invio del feedback");

            toast.success("Il tuo feedback è stato inviato!");
            navigate("/private/categories");
        } catch (error) {
            toast.error("Errore durante l'invio del feedback.");
            console.error(error);
        }
    };
    return (
        <div className="bg-[#FFFFFF] min-h-screen flex flex-col items-center ">

            {/* Bottone paga in app */}
            <div className=" w-full max-w-md mt-4 px-4 flex relative left-5">
                <button
                    className="flex items-center text- mb-2 focus:outline-none hover:text-cyan-400 transition"
                    style={{ width: 207, height: 43 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                        <circle cx="21.5" cy="21.5" r="21.5" fill="#F3F3F3" />
                        <path d="M17.5 22.5L24.2454 29.2432C24.5414 29.5385 25.021 29.5385 25.317 29.2432C25.613 28.948 25.613 28.4685 25.317 28.1733L19.1066 21.9651L25.3162 15.757C25.6122 15.4617 25.6122 14.9822 25.3162 14.6863C25.0202 14.391 24.5399 14.391 24.2439 14.6863L17.4985 21.4294C17.2071 21.7216 17.2071 22.2087 17.4985 22.5Z" fill="#332B2C" />
                    </svg>
                    <span className="ml-3 font-semibold text-lg">Paga in app</span>
                </button>
            </div>

            {/* Card */}
            <div className="w-[375px] h-[665px] bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center mt-10">
                <h2 className="text-2xl font-extrabold mb-1 text-center">Grazie!</h2>
                <p className="text-gray-400 mb-6 text-center text-[15px]">Il tuo pagamento è andato a buon fine.</p>

                {/* Checkmark icona */}
                <div className="mb-6 flex justify-center">
                    <div className="w-32 h-32 rounded-full border-4 border-black flex items-center justify-center">
                        <svg className="w-20 h-20" viewBox="0 0 48 48" fill="none">
                            <path d="M16 25l7 7 9-13" stroke="#00BCD4" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="scale(2) translate(-11 -12)" />
                        </svg>
                    </div>
                </div>

                {/* Separator */}
                <div className="w-full mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="335" height="1" viewBox="0 0 335 1" fill="none">
                        <line y1="0.5" x2="335" y2="0.5" stroke="#F3F3F3" />
                    </svg>
                </div>

                {/* Feedback Section */}
                <div className="w-full bg-gray-100 rounded-xl p-4 flex flex-col items-center shadow-2xl border border-gray-200 mb-10 ">
                    <span className="font-bold text-xl mb-1 text-gray-800">Lascia un feedback</span>
                    <span className="text-gray-400 text-sm mb-2">È gratis e ci aiuta a migliorare!</span>

                    {/* Stelle */}
                    <div className="flex justify-center items-center bg-white rounded-full shadow p-2 mb-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button key={star} aria-label={`${star} stelle`} className="focus:outline-none" onClick={() => setRating(star)} type="button">
                                <svg width="28" height="28" viewBox="0 0 48 48" fill="none" stroke="#3BC8E1" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
                                    <polygon points="24,6 30,19 44,19 32,28 36,42 24,34 12,42 16,28 4,19 18,19" fill={star <= rating ? "yellow" : "none"} opacity={star <= rating ? 0.7 : 1} />
                                </svg>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Textarea */}
                <div className="mx-auto mb-4" style={{ width: 335, height: 73, borderRadius: 8 }}>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full h-full p-3 border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
                        placeholder="raccontaci di più sulla tua esperienza"
                    />
                </div>

                {/* Bottone invio */}
                <div className="flex justify-center">
                    <button
                        onClick={handleSubmitOrder}
                        type="button"
                        className="bg-cyan-500 text-white flex items-center justify-center opacity-50 gap-2 rounded-full px-6 py-1.5 cursor-pointer font-semibold hover:opacity-100 transition mt-7"
                        style={{ width: 273, height: 39, borderRadius: 99 }}
                    >
                        Invia feedback
                    </button>
                </div>
            </div>
        </div>
    );
}

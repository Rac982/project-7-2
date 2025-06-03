import React, { useRef, useState } from "react";
import JSConfetti from "js-confetti";



export default function ConfirmPayment() {
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [isCelebrating, setIsCelebrating] = useState(false);
    const [showThanks, setShowThanks] = useState(false);
    const jsConfettiRef = useRef(null);

    if (!jsConfettiRef.current) {
        jsConfettiRef.current = new JSConfetti();
    }

    const canSubmit = rating > 0 || feedback.trim() !== "";

    const handleSubmit = async () => {
        setIsCelebrating(true);
        if (rating >= 3) {
            await jsConfettiRef.current.addConfetti({
                confettiRadius: 12,
                confettiNumber: 180,
                colors: ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"],
            });
        } else if (rating >= 1 && rating <= 2) {
            await jsConfettiRef.current.addConfetti({
                emojis: ["😢", "😭", "😿"],
                emojiSize: 60,
                confettiNumber: 100,
            });
        }
        setIsCelebrating(false);
        setShowThanks(true);
        setTimeout(() => setShowThanks(false), 3000);
        setFeedback("");
        setRating(0);
    };

    return (
        <div className="bg-[#FFFFFF] min-h-screen flex flex-col items-center pb-24">
            {/* Bottone paga in app */}
            <div className="w-full max-w-md mt-4 px-4 flex relative left-5">
                <button
                    className="flex items-center mb-2 focus:outline-none hover:text-cyan-400 transition"
                    style={{ width: 207, height: 43 }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="43"
                        height="43"
                        viewBox="0 0 43 43"
                        fill="none"
                    >
                        <circle cx="21.5" cy="21.5" r="21.5" fill="#F3F3F3" />
                        <path
                            d="M17.5 22.5L24.2454 29.2432C24.5414 29.5385 25.021 29.5385 25.317 29.2432C25.613 28.948 25.613 28.4685 25.317 28.1733L19.1066 21.9651L25.3162 15.757C25.6122 15.4617 25.6122 14.9822 25.3162 14.6863C25.0202 14.391 24.5399 14.391 24.2439 14.6863L17.4985 21.4294C17.2071 21.7216 17.2071 22.2087 17.4985 22.5Z"
                            fill="#332B2C"
                        />
                    </svg>
                    <span className="ml-3 font-semibold text-lg">Paga in app</span>
                </button>
            </div>

            {/* Card */}
            <div className="w-[375px] h-[665px] bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center mt-10">
                <h2 className="text-2xl font-extrabold mb-1 text-center">Grazie!</h2>
                <p className="text-gray-400 mb-6 text-center text-[15px]">
                    Il tuo pagamento è andato a buon fine.
                </p>
                <div className="mb-3 flex justify-center">
                    <div className="w-32 h-32 rounded-full border-black flex items-center justify-center">
                        <img
                            src="https://cdn.discordapp.com/attachments/1333809468806266952/1376946808177168445/verified.gif?ex=68372d25&is=6835dba5&hm=4e28d2ae9c53b770b7c5c779b4bb9e8d41dc1a488f1ecca99694dbf256ada74a"
                            alt="Verificato"
                            style={{
                                display: "block",
                                maxWidth: "173px",
                                maxHeight: "173px",
                                margin: "auto",
                                userSelect: "none"
                            }}
                        />
                    </div>

                </div>

                {/* Dettagli */}
                <div className="w-full mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="335" height="1" viewBox="0 0 335 1" fill="none">
                        <line y1="0.5" x2="335" y2="0.5" stroke="#F3F3F3" />
                    </svg>
                    <div className="w-[335px] h-[18px] flex justify-between text-gray-500 text-[15px] mb-1">
                        <span>Importo del conto</span>
                        <span>0,00 €</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="335" height="1" viewBox="0 0 335 1" fill="none">
                        <line y1="0.5" x2="335" y2="0.5" stroke="#F3F3F3" />
                    </svg>
                    <div className="w-[335px] h-[18px] flex justify-between text-gray-500 text-[15px] mb-1">
                        <span>Mancia</span>
                        <span>0,00 €</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="335" height="1" viewBox="0 0 335 1" fill="none">
                        <line y1="0.5" x2="335" y2="0.5" stroke="#F3F3F3" />
                    </svg>
                    <div className="w-[335px] h-[18px] flex justify-between font-bold text-[16px] mt-2">
                        <span>Totale</span>
                        <span>0,00 €</span>
                    </div>
                </div>

                {/* Box grigio SOLO fino alle stelle */}
                <div className="w-full bg-gray-100 rounded-xl p-4 flex flex-col items-center shadow-md border border-gray-200 mb-4">
                    <span className="font-bold text-xl mb-1 text-gray-800">Lascia un feedback</span>
                    <span className="text-gray-400 text-sm mb-2">
                        È gratis e ci aiuta a migliorare!
                    </span>
                    {/* Stelle */}
                    <div className="flex justify-center items-center bg-white rounded-full shadow p-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                aria-label={`${star} stelle`}
                                className="focus:outline-none"
                                onClick={() => setRating(star)}
                                type="button"
                            >
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    stroke="#3BC8E1"
                                    strokeWidth="3"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                >
                                    <polygon
                                        points="24,6 30,19 44,19 32,28 36,42 24,34 12,42 16,28 4,19 18,19"
                                        fill={star <= rating ? "yellow" : "none"}
                                        opacity={star <= rating ? 0.7 : 1}
                                    />
                                </svg>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Textarea e bottone FUORI dal box grigio */}
                <div className="mx-auto mb-4 w-[335px] h-[73px]">
                    <textarea
                        className="w-full h-full p-3 border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
                        placeholder="raccontaci di più sulla tua esperienza"
                        value={feedback}
                        onChange={e => setFeedback(e.target.value)}
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={!canSubmit || isCelebrating}
                        className={`
    bg-cyan-500 text-white flex items-center justify-center gap-2 rounded-full px-6 py-1.5 font-semibold
    w-[273px] h-[39px] mt-2 transition
    ${canSubmit && !isCelebrating ? "hover:scale-105 active:scale-95 shadow-lg" : "opacity-50 cursor-not-allowed"}
    animate-bounce
`}

                    >
                        {isCelebrating ? "🎉" : "Invia feedback"}
                    </button>
                </div>
            </div>
        </div>
    );
}

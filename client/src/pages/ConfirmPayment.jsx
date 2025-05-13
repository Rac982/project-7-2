import React, { useState } from "react";

export default function ConfirmPayment() {
    const [rating, setRating] = useState(0);

    return (
        <div className="bg-[#FFFFFF] min-h-screen flex flex-col items-center ">

            {/* Bottone paga in app */}

            <div className=" w-full max-w-md mt-4 px-4 flex relative left-5">
                <button
                    className="flex items-center text- mb-2 focus:outline-none hover:text-cyan-400 transition"
                    style={{
                        width: 207,
                        height: 43,
                    }}
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
            <div className="w-[375px] h-[665px] bg-white rounded-3xl p-6 flex flex-col items-center mt-10"
                style={{
                    boxShadow: "0 -3px 12px -5px rgba(0, 0, 0, 0.18)"
                }}>

                <h2 className="text-2xl font-extrabold mb-1 text-center">Grazie!</h2>
                <p className="text-gray-400 mb-6 text-center text-[15px]">
                    Il tuo pagamento è andato a buon fine.
                </p>
                <div className="mb-6 flex justify-center">
                    <div className="w-32 h-32 rounded-full border-4 border-black flex items-center justify-center">
                        <svg className="w-20 h-20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="173"
                                height="173"
                                viewBox="0 0 173 173"
                                fill="none"
                            >
                                <rect width="173" height="173" fill="url(#pattern0_102_2933)" />
                                <defs>
                                    <pattern id="pattern0_102_2933" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_102_2933" transform="scale(0.0015625)" />
                                    </pattern>
                                </defs>
                            </svg>
                            <path
                                d="M16 25l7 7 9-13"
                                stroke="#00BCD4"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                transform="scale(2) translate(-11 -12)"
                            />
                        </svg>
                    </div>
                </div>

                {/* Dettagli */}
                <div className="w-full mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="335" height="1" viewBox="0 0 335 1" fill="none">
                        <line y1="0.5" x2="335" y2="0.5" stroke="#F3F3F3" />
                    </svg>
                    <div className="w-[335px] h-[18px]  flex justify-between text-gray-500 text-[15px] mb-1">
                        <span>Importo del conto</span>
                        <span>0,00 €</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="335" height="1" viewBox="0 0 335 1" fill="none">
                        <line y1="0.5" x2="335" y2="0.5" stroke="#F3F3F3" />
                    </svg>
                    <div className="w-[335px] h-[18px]  flex justify-between text-gray-500 text-[15px] mb-1">
                        <span>Mancia</span>
                        <span>0,00 €</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="335" height="1" viewBox="0 0 335 1" fill="none">
                        <line y1="0.5" x2="335" y2="0.5" stroke="#F3F3F3" />
                    </svg>
                    <div className="w-[335px] h-[18px]  flex justify-between font-bold text-[16px] mt-2">
                        <span>Totale</span>
                        <span>0,00 €</span>
                    </div>
                </div>

                {/* Feedback */}
                <div className="w-full bg-gray-100 rounded-3xl p-4 flex flex-col items-center border border-gray-200 mb-10 "
                    style={{
                        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.30), 0px 1px 3px rgba(0, 0, 0, 0.15)"
                    }}>
                    <span className="font-bold text-xl mb-1 text-gray-800">Lascia un feedback</span>
                    <span className="text-gray-400 text-sm mb-2">
                        È gratis e ci aiuta a migliorare!
                    </span>

                    {/* feedback stelle */}
                    <div className="flex justify-center items-center bg-white rounded-full shadow p-2 mb-2 space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => {
                            const isSelected = star <= rating;
                            return (
                                <button
                                    key={star}
                                    aria-label={`${star} stelle`}
                                    className="focus:outline-none"
                                    onClick={() => setRating(star)}
                                    type="button"
                                    style={{ background: "transparent", border: "none", padding: 0, cursor: "pointer" }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        stroke="#3BC8E1"
                                        strokeWidth="0.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <g clipPath="url(#clip0_102_2445)">
                                            <path
                                                d="M19.4413 9.48948C19.9481 8.99569 20.127 8.27096 19.9082 7.59846C19.6899 6.92569 19.1192 6.44456 18.419 6.3428L14.0952 5.71456C13.8757 5.68253 13.6861 5.54475 13.588 5.346L11.6543 1.42772C11.3412 0.793542 10.7073 0.399597 9.99997 0.399597C9.29262 0.399597 8.65872 0.793542 8.34559 1.42772C8.34559 1.42776 6.41196 5.34596 6.41196 5.34596C6.31383 5.54479 6.12419 5.68257 5.90504 5.71452L1.58106 6.34276C0.880748 6.44456 0.310084 6.92569 0.0918414 7.59811C-0.127026 8.27096 0.0518414 8.99573 0.558521 9.48936L3.68735 12.5395C3.84606 12.6942 3.91848 12.9169 3.8811 13.1352L3.14235 17.442C3.02297 18.1392 3.30419 18.8306 3.87626 19.2461C4.44844 19.6619 5.19297 19.7157 5.81938 19.3867L9.68665 17.3534C9.88282 17.2503 10.1171 17.2504 10.3131 17.3533L14.1806 19.3867C14.807 19.7158 15.5516 19.6619 16.1238 19.2461C16.6958 18.8305 16.977 18.1392 16.8577 17.442L16.1189 13.1354C16.0815 12.9169 16.1539 12.6942 16.3127 12.5394L19.4413 9.48948ZM14.9638 13.3332L15.7027 17.6401C15.7468 17.8981 15.6468 18.1442 15.435 18.298C15.3174 18.3835 15.1812 18.4286 15.041 18.4286C14.9796 18.4286 14.8618 18.4208 14.7256 18.3492L10.8584 16.316C10.5944 16.1774 10.2977 16.1042 10 16.1042C9.70219 16.1042 9.40532 16.1775 9.14165 16.316L5.27403 18.3495C5.00836 18.489 4.74251 18.427 4.56512 18.2981C4.35325 18.1442 4.25321 17.8981 4.29743 17.6398L5.03614 13.3333C5.13864 12.7344 4.94012 12.1241 4.50524 11.7003L1.37657 8.65026C1.18883 8.46733 1.12524 8.20964 1.20626 7.96065C1.28723 7.7112 1.49028 7.54018 1.74965 7.50249L6.07348 6.87425C6.67497 6.78651 7.19407 6.40917 7.46282 5.86468L9.39641 1.94655C9.51235 1.71171 9.73801 1.57151 10 1.57151C10.262 1.57151 10.4877 1.71171 10.6036 1.94655L12.5372 5.86464C12.806 6.40921 13.3252 6.78655 13.9261 6.87421C14.8847 7.01339 16.7206 7.27995 18.2503 7.50249C18.5098 7.54018 18.7128 7.71132 18.7936 7.96026C18.8748 8.20975 18.8111 8.46737 18.6236 8.65014L15.4947 11.7003C15.0598 12.1241 14.8613 12.7345 14.9638 13.3332Z"
                                                fill={isSelected ? "#FFD600" : "none"}
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_102_2445">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                            );
                        })}
                    </div>


                </div>

                {/* Finestra per scrivere la recensione */}
                <div className="mx-auto mb-4" style={{ width: 335, height: 73, borderRadius: 8 }}>
                    <textarea
                        className="w-full h-full p-3 border border-gray-300 resize-none 
                        focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
                        placeholder="raccontaci di più sulla tua esperienza"
                        style={{ borderRadius: 8 }}
                    />
                </div>

                {/* Bottone invia feedback */}
                <div className="flex justify-center">
                    <button
                        type="button"
                        className="bg-cyan-500 text-white flex items-center justify-center opacity-50
                         gap-2 rounded-full px-6 py-1.5 font-semibold hover:opacity-100 transition mt-7"
                        style={{ width: 273, height: 39, borderRadius: 99, }} >Invia feedback </button>
                </div>

            </div>

        </div>


    );

}

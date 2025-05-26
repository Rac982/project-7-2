import { useState } from "react";

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
      <div className="w-[375px] h-[665px] bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center mt-10">
        <h2 className="text-2xl font-extrabold mb-1 text-center">Grazie!</h2>
        <p className="text-gray-400 mb-6 text-center text-[15px]">
          Il tuo pagamento è andato a buon fine.
        </p>
        <div className="mb-6 flex justify-center">
          <div className="w-32 h-32 rounded-full border-4 border-black flex items-center justify-center">
            <svg
              className="w-20 h-20"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
                  <pattern
                    id="pattern0_102_2933"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_102_2933"
                      transform="scale(0.0015625)"
                    />
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="335"
            height="1"
            viewBox="0 0 335 1"
            fill="none"
          >
            <line y1="0.5" x2="335" y2="0.5" stroke="#F3F3F3" />
          </svg>
          <div className="w-[335px] h-[18px]  flex justify-between text-gray-500 text-[15px] mb-1">
            <span>Importo del conto</span>
            <span>0,00 €</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="335"
            height="1"
            viewBox="0 0 335 1"
            fill="none"
          >
            <line y1="0.5" x2="335" y2="0.5" stroke="#F3F3F3" />
          </svg>
          <div className="w-[335px] h-[18px]  flex justify-between text-gray-500 text-[15px] mb-1">
            <span>Mancia</span>
            <span>0,00 €</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="335"
            height="1"
            viewBox="0 0 335 1"
            fill="none"
          >
            <line y1="0.5" x2="335" y2="0.5" stroke="#F3F3F3" />
          </svg>
          <div className="w-[335px] h-[18px]  flex justify-between font-bold text-[16px] mt-2">
            <span>Totale</span>
            <span>0,00 €</span>
          </div>
        </div>

        {/* Feedback */}
        <div className="w-full bg-gray-100 rounded-xl p-4 flex flex-col items-center shadow-2xl border border-gray-200 mb-10 ">
          <span className="font-bold text-xl mb-1 text-gray-800">
            Lascia un feedback
          </span>
          <span className="text-gray-400 text-sm mb-2">
            È gratis e ci aiuta a migliorare!
          </span>

          {/* feedback stelle */}
          <div className="flex justify-center items-center bg-white rounded-full shadow p-2 mb-6">
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

        {/* Finestra per scrivere la recensione */}
        <div
          className="mx-auto mb-4"
          style={{ width: 335, height: 73, borderRadius: 8 }}
        >
          <textarea
            className="w-full h-full p-3 border border-gray-300 resize-none 
                        focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
            placeholder="raccontaci di più sulla tua esperienza"
            style={{ borderRadius: 8 }}
            name="content"
          />
        </div>

        {/* Bottone invia feedback */}
        <div className="flex justify-center">
          <button
            className="bg-cyan-500 text-white flex items-center justify-center opacity-50
                         gap-2 rounded-full px-6 py-1.5 font-semibold hover:opacity-100 transition mt-7"
            style={{ width: 273, height: 39, borderRadius: 99 }}
          >
            Invia feedback{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

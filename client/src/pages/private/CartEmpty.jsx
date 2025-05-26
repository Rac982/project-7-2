import React from "react";

export default function CartEmpty() {
    return (
        <div
            className="absolute bg-white flex flex-col"
            style={{
                width: "375px",
                height: "812px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >
            {/* BODY */}
            <div className="relative flex-1 w-full flex flex-col items-center pt-8 px-4">

                {/* freccia + Titolo */}
                <div className="flex items-center w-full mb-8">
                    <button className="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                            <circle cx="21.5" cy="21.5" r="21.5" fill="#F3F3F3" />
                            <path d="M17.5898 22.0354L24.3353 28.7786C24.6313 29.0738 25.1108 29.0738 25.4075 28.7786C25.7035 28.4833 25.7035 28.0038 25.4075 27.7086L19.1971 21.5004L25.4068 15.2923C25.7028 14.997 25.7028 14.5175 25.4068 14.2215C25.1108 13.9263 24.6305 13.9263 24.3345 14.2215L17.5891 20.9646C17.2977 21.2568 17.2977 21.7439 17.5898 22.0354Z" fill="#332B2C" />
                        </svg>
                    </button>
                    <h2 className="text-lg font-semibold text-[#231F20]">Riepilogo ordine</h2>
                </div>

                {/* Icona deserto (video animato) */}
                <div className="flex justify-center items-center w-full mt-2 mb-2 z-10">
                    <video
                        width="256"
                        height="256"
                        preload="none"
                        style={{
                            background: "transparent url('https://cdn-icons-png.flaticon.com/512/17507/17507665.png') 50% 50% / fit no-repeat"
                        }}
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="https://cdn-icons-mp4.flaticon.com/512/17507/17507665.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Testo */}
                <div className="text-center mb-8 z-10 mt-[30px]">
                    <h3 className="text-2xl font-semibold text-[#231F20] mb-2">
                        Non hai ancora scelto nulla
                    </h3>
                    <p className="text-[#A0A0A0] text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>

                {/* Bottone */}
                <button
                    className="w-[206px] h-[38px] bg-[#36C9E9] rounded-full text-white font-semibold text-base shadow-md active:scale-95 transition z-10"
                >
                    Torna al menu
                </button>
            </div>
        </div>
    );
}

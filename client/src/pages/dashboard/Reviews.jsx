import { useState } from "react";
import ChartReviews from "../../components/shared/ChartReviews";
import ReviewCard from "../../components/shared/ReviewCard";
import Stars from "../../components/shared/Stars";

const userReviews = [
  {
    id: 1,
    name: "Tavolo 1 - Cliente",
    review: "Ottimo servizio, molto soddisfatto!",
    rating: 5,
    time: "12:30",
  },
  {
    id: 2,
    name: "Tavolo 1 - Cliente",
    review:
      "Servizio buono, ma c'è margine di miglioramento. Servizio buono, ma c'è margine di miglioramento. Servizio buono, ma c'è margine di miglioramento.",
    rating: 4,
    time: "12:31",
  },
  {
    id: 3,
    name: "Tavolo 1 - Cliente",
    review:
      "Non sono rimasta soddisfatta del servizio. Servizio buono, ma c'è margine di miglioramento. Servizio buono, ma c'è margine di miglioramento.",
    rating: 2,
    time: "12:32",
  },
  {
    id: 4,
    name: "Tavolo 1 - Cliente",
    review:
      "Ottimo servizio, molto soddisfatto! Servizio buono, ma c'è margine di miglioramento. Servizio buono, ma c'è margine di miglioramento.",
    rating: 5,
    time: "12:33",
  },
  {
    id: 5,
    name: "Tavolo 1 - Cliente",
    review:
      "Servizio buono, ma c'è margine di miglioramento. Servizio buono, ma c'è margine di miglioramento. Servizio buono, ma c'è margine di miglioramento.",
    rating: 4,
    time: "12:34",
  },
  {
    id: 6,
    name: "Tavolo 1 - Cliente",
    review:
      "Non sono rimasta soddisfatta del servizio. Servizio buono, ma c'è margine di miglioramento. Servizio buono, ma c'è margine di miglioramento.",
    rating: 2,
    time: "12:29",
  },
];

const averageRating = (
  userReviews.reduce((acc, review) => acc + review.rating, 0) /
  userReviews.length
).toFixed();

const Reviews = () => {
  const [filter, setFilter] = useState("");
  const [displayedReviews, setDisplayedReviews] = useState(userReviews);

  const handleRecentFilter = () => {
    setFilter("Più recenti");
    const sorted = [...userReviews].sort((a, b) => {
      return b.time.localeCompare(a.time);
    });
    setDisplayedReviews(sorted);
  };

  const handleWorstFilter = () => {
    setFilter("Peggiori");
    const sorted = [...userReviews].sort((a, b) => a.rating - b.rating);
    setDisplayedReviews(sorted);
  };

  const handleBestFilter = () => {
    setFilter("Migliori");
    const sorted = [...userReviews].sort((a, b) => b.rating - a.rating);
    setDisplayedReviews(sorted);
  };

  return (
    <div className="flex flex-col px-6">
      <div className="flex gap-20 justify-between items-center py-2 text-center h-[300px] ">
        <div className="flex flex-col justify-center items-center w-1/4 h-full">
          <h1 className="font-bold text-8xl">{averageRating}.0</h1>
          <Stars rating={averageRating} />
          <div>
            <span>Sulla base di {userReviews.length} recensioni</span>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <ChartReviews userReviews={userReviews} />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="gap-5 ">
          <div className="py-4">
            <h2>Ordina per</h2>
          </div>
          <div className="flex gap-3 pb-4 text-white">
            <div
              className={`${
                filter === "Più recenti"
                  ? "bg-[#1418a1] text-white"
                  : "bg-[#dadbf0] text-black"
              } rounded-full px-3 cursor-pointer`}
              onClick={handleRecentFilter}
            >
              Più recenti
            </div>
            <div
              className={`${
                filter === "Migliori"
                  ? "bg-[#1418a1] text-white"
                  : "bg-[#dadbf0] text-black"
              } rounded-full px-3 cursor-pointer`}
              onClick={handleBestFilter}
            >
              Migliori
            </div>
            <div
              className={`${
                filter === "Peggiori"
                  ? "bg-[#1418a1] text-white"
                  : "bg-[#dadbf0] text-black"
              } rounded-full px-3 cursor-pointer`}
              onClick={handleWorstFilter}
            >
              Peggiori
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 w-full">
          {displayedReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

import ChartReviews from "../../components/shared/ChartReviews";
import ReviewCard from "../../components/shared/ReviewCard";
import Stars from "../../components/shared/Stars";

const Reviews = () => {
<<<<<<< HEAD
  const userReviews = [
    {
      id: 1,
      name: "Tavolo 1 - Cliente",
      review: "Ottimo servizio, molto soddisfatto!",
      rating: 5,
    },
    {
      id: 2,
      name: "Tavolo 1 - Cliente",
      review: "Servizio buono, ma c'è margine di miglioramento.",
      rating: 4,
    },
    {
      id: 3,
      name: "Tavolo 1 - Cliente",
      review: "Non sono rimasta soddisfatta del servizio.",
      rating: 2,
    },
    {
      id: 4,
      name: "Tavolo 1 - Cliente",
      review: "Ottimo servizio, molto soddisfatto!",
      rating: 5,
    },
    {
      id: 5,
      name: "Tavolo 1 - Cliente",
      review: "Servizio buono, ma c'è margine di miglioramento.",
      rating: 4,
    },
    {
      id: 6,
      name: "Tavolo 1 - Cliente",
      review: "Non sono rimasta soddisfatta del servizio.",
      rating: 2,
    },
  ];

  const averageRating = (
    userReviews.reduce((acc, review) => acc + review.rating, 0) /
    userReviews.length
  ).toFixed();

  return (
    <div className="flex flex-col">
      <div className="bg-red-50 min-w-[972px] flex gap-5 justify-between items-center">
        <div className="flex flex-col items-center w-1/4">
          <h1 className="font-bold text-8xl">{averageRating}.0</h1>
          <Stars rating={averageRating} />
          <div>
            <span>Sulla base di {userReviews.length} recensioni</span>
          </div>
        </div>
        <div className="flex items-center justify-center w-3/4">
          <ChartReviews userReviews={userReviews} />
        </div>
      </div>
      <div>
        <div>
          <div>
            <h2>Ordina per</h2>
          </div>
          <div>
            <div>Più recenti</div>
            <div>Migliori</div>
            <div>Peggiori</div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {userReviews.map((review) => (
            <ReviewCard key={review.id} review={review} className="w-1/3" />
          ))}
        </div>
      </div>
    </div>
  );
=======
  return <div></div>;
>>>>>>> eb1e383859b5b87e18a29ec7fc943d79a63f1e22
};

export default Reviews;

import Stars from "./Stars";

const ReviewCard = ({ review }) => {
  return (
    <div className=" p-3 shadow-2xl bg-gray-50 rounded-md grid-cols-1 ">
      <h1 className="font-bold">{review.name}</h1>
      <div className="flex flex-col justify-between items-center md:flex-row">
        <span>{review.time}</span>
        <Stars rating={review.rating} />
      </div>
      <div>
        <span>{review.review}</span>
      </div>
    </div>
  );
};

export default ReviewCard;

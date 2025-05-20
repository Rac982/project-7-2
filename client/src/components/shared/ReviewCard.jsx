import Stars from "./Stars";

const ReviewCard = ({ review }) => {
  return (
    <div className="p-6 shadow-2xl bg-gray-50 rounded-xl grid-cols-1  ">
      <h1 className="font-bold">Tavolo {review.table} - {review.author.first_name}</h1>
      <div className="flex justify-between items-center md:flex-row">
        <span>{new Date(review.createdAt).toLocaleTimeString()}</span>
        <Stars rating={review.rating} />
      </div>
      <div>
        <span>{review.content}</span>
      </div>
    </div>
  );
};

export default ReviewCard;

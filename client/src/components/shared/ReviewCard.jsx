import Stars from "./Stars";

const ReviewCard = ({ review, className }) => {
  return (
    <div className={className}>
      <h1>{review.name}</h1>
      <div>
        <span>{review.time}</span>
        <Stars rating={review.rating} />
      </div>
    </div>
  );
};

export default ReviewCard;

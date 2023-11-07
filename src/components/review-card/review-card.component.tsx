import './review-card.styles.scss';

type Props = {
  reviewText: string;
  image: string;
  userName: string;
  date: string;
  rating: string;
};

const ReviewCard = ({ reviewText, image, userName, date, rating }: Props) => {
  return (
    <figure className="review">
      <blockquote className="review__text">{reviewText}</blockquote>
      <figcaption className="review__user">
        <img src={image} alt={`user ${userName}`} className="review__photo" />
        <div className="review__user-box">
          <p className="review__user-name">{userName}</p>
          <p className="review__user-date">{date}</p>
        </div>
        <div className="review__rating">{rating}</div>
      </figcaption>
    </figure>
  );
};

export default ReviewCard;

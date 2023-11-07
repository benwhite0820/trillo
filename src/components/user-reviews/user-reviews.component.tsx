import Button from '@components/review-card-button/button.component';
import './user-reviews.style.scss';
import ReviewCard from '@components/review-card/review-card.component';
import { userReviews } from '@data/userReviews';

const UserReviews = () => {
  return (
    <div className="user-reviews">
      {userReviews.map((item) => (
        <ReviewCard key={item.userName} {...item} />
      ))}
      <Button buttonType="inline">
        Show All <span>&rarr;</span>
      </Button>
    </div>
  );
};

export default UserReviews;

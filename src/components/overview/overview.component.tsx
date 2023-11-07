import { BsFillStarFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import './overview.style.scss';
import Button from '@components/review-card-button/button.component';

const Overview = () => {
  return (
    <div className="overview">
      <h1 className="overview__heading">Hotel Las Palmas</h1>

      <div className="overview__stars">
        <BsFillStarFill className="overview__icon-star" />
        <BsFillStarFill className="overview__icon-star" />
        <BsFillStarFill className="overview__icon-star" />
        <BsFillStarFill className="overview__icon-star" />
        <BsFillStarFill className="overview__icon-star" />
      </div>

      <div className="overview__location">
        <FaLocationDot className="overview__icon-location" />
        <Button buttonType="inline">Albufeira, Portugal</Button>
      </div>

      <div className="overview__rating">
        <div className="overview__rating-average">8.6</div>
        <div className="overview__rating-count">429 votes</div>
      </div>
    </div>
  );
};

export default Overview;

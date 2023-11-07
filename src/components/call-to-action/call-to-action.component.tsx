import './call-to-action.style.scss';
import Button from '@components/review-card-button/button.component';

const CallToAction = () => {
  return (
    <div className="cta">
      <h2 className="cta__book-now">
        Good news! We have 4 free rooms for your selected dates!
      </h2>
      <Button buttonType="cta">
        <span className="btn__visible">Book now</span>
        <span className="btn__invisible">Only 4 rooms left</span>
      </Button>
    </div>
  );
};

export default CallToAction;

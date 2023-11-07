import './detail.style.scss';
import Friend1 from '@assets/images/user-3.jpg';
import Friend2 from '@assets/images/user-4.jpg';
import Friend3 from '@assets/images/user-5.jpg';
import Friend4 from '@assets/images/user-6.jpg';

const Detail = () => {
  return (
    <div className="detail">
      <div className="description">
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
          dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas,
          ut corporis incidunt deserunt quae architecto voluptate.
        </p>
        <p className="paragraph">
          Accusantium cumque, quas, ut corporis incidunt deserunt quae
          architecto voluptate delectus, inventore iure aliquid aliquam.
        </p>
        <ul className="list">
          <li className="list__item">Close to the beach</li>
          <li className="list__item">Breakfase included</li>
          <li className="list__item">Free airport shuffle</li>
          <li className="list__item">Free wifi in all rooms</li>
          <li className="list__item">Air confitioning and heating</li>
          <li className="list__item">Pets allowed</li>
          <li className="list__item">We speak all languages</li>
          <li className="list__item">Perfect for families</li>
        </ul>
        <div className="recommend">
          <p className="recommend__count">
            Lucy and 3 other friends recommend this hotel
          </p>
          <div className="recommend__friends">
            <div className="recommend__friends">
              <img src={Friend1} alt="Friend 1" className="recommend__photo" />
              <img src={Friend2} alt="Friend 2" className="recommend__photo" />
              <img src={Friend3} alt="Friend 3" className="recommend__photo" />
              <img src={Friend4} alt="Friend 4" className="recommend__photo" />
            </div>
          </div>
        </div>
      </div>

      <div className="user-reviews">User reviews</div>
    </div>
  );
};

export default Detail;

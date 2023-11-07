import {
  BiSolidHome,
  BiSolidPlaneTakeOff,
  BiSolidKey,
  BiSolidMapAlt,
} from 'react-icons/bi';
import './side-bar.style.scss';

const SideBar = () => {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item side-nav__item--active">
          <a href="#" className="side-nav__link">
            <BiSolidHome className="side-nav__icon" />
            <span>Hotel</span>
          </a>
        </li>

        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <BiSolidPlaneTakeOff className="side-nav__icon" />
            <span>Flight</span>
          </a>
        </li>

        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <BiSolidKey className="side-nav__icon" />
            <span>Car Rental</span>
          </a>
        </li>

        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <BiSolidMapAlt className="side-nav__icon" />
            <span>Tours</span>
          </a>
        </li>
      </ul>

      <div className="legal">&copy; 2017 by trillo. All rights reserved.</div>
    </nav>
  );
};

export default SideBar;

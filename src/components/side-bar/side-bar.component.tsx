import {
  BiSolidHome,
  BiSolidPlaneTakeOff,
  BiSolidKey,
  BiSolidMapAlt,
} from 'react-icons/bi';
import './side-bar.style.scss';

// type Props = {
//   sideBar: { icon: React.ReactNode; title: string }[];
// };
// { sideBar }: Props
const SideBar = () => {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item">
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

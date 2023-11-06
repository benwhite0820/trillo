import { BsFillBookmarkFill, BsFillChatRightDotsFill } from 'react-icons/bs';
import UserLogo from '@assets/images/user.jpg';
import './user-nav.style.scss';

const UserNav = () => {
  return (
    <nav className="user-nav">
      <div className="user-nav__icon-box">
        <BsFillBookmarkFill className="user-nav__icon" />
        <span className="user-nav__notification">7</span>
      </div>
      <div className="user-nav__icon-box">
        <BsFillChatRightDotsFill className="user-nav__icon" />
        <span className="user-nav__notification">13</span>
      </div>
      <div className="user-nav__user">
        <img src={UserLogo} alt="user photo" className="user-nav__user-photo" />
        <span className="user-nav__user-name">Jonas</span>
      </div>
    </nav>
  );
};

export default UserNav;

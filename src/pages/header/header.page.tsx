import './header.style.scss';
import Logo from '@assets/images/logo.png';
import SearchBar from '@components/search-bar/search-bar.component';
import UserNav from '@components/user-nav/user-nav.component';

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="trillo logo" className="logo" />
      <form action="" className="search">
        <SearchBar />
      </form>

      <UserNav />
    </header>
  );
};

export default Header;

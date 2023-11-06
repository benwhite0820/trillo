import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
  return (
    <>
      <input
        type="text"
        className="search__input"
        placeholder="Search hotels"
      />
      <button className="search__button">
        <AiOutlineSearch className="search__icon" />
      </button>
    </>
  );
};

export default SearchBar;

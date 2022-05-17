import "./SearchBox.scss";

const SearchBox = ({label, searchTerm, handleInput}) => {
  return (
    <form className="search-box">
      <input type="text" name={label} value={searchTerm} onInput={handleInput}/>
    </form>
  );
}

export default SearchBox;
import './SearchItem.css';
const SearchItem = ({ value, label, checked, handleSelect, id }) => {
  return (
    <div className="searchitem">
      <input type="checkbox" hidden id={label} />
      <label
        onClick={() => handleSelect(id)}
        className={`searchitem_label ${checked ? 'selected' : ''}`}
        htmlFor={label}
      >
        <span></span>
      </label>
      <p>{label}</p>
    </div>
  );
};

export default SearchItem;

import "./FilterItem.scss";

const FilterItem = ({value, handleChange}) => {
  return(
    <div className="filter-item">
      <label htmlFor={value}>{value}</label>
      <input type="checkbox" value={value} id={value} onChange={handleChange} />
    </div>
  );
}

export default FilterItem;
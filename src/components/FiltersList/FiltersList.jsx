import FilterItem from "../FilterItem/FilterItem";
import "./FiltersList.scss";

const FiltersList = ({handleChange}) => {
  return (
    <div className="filter-list">
      <FilterItem value={"High ABV (> 6.0%)"} handleChange={handleChange} />
      <FilterItem value={"Classic Range"} handleChange={handleChange} />
      <FilterItem value={"Acidic (ph < 4)"} handleChange={handleChange} />
    </div>
  );
}

export default FiltersList;
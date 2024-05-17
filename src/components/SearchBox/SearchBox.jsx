import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { useId } from "react";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterId = useId();
  const filterValue = useSelector(selectNameFilter);
  return (
    <div className={s.boxContainer}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        className={s.boxInput}
        placeholder="Search contacts..."
        type="search"
        value={filterValue}
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
        id={filterId}
      />
    </div>
  );
};

export default SearchBox;

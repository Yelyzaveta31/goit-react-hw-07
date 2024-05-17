import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { useId } from "react";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterId = useId();

  return (
    <div className={s.boxContainer}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        className={s.boxInput}
        placeholder="Search contacts..."
        type="search"
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
        id={filterId}
      />
    </div>
  );
};

export default SearchBox;

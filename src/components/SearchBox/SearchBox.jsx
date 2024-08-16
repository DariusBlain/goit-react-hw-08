import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter, selectNumberFilter } from "../../redux/filters/selectors";
import s from "./SearchBox.module.css";
import { changeNameFilter, changeNumberFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(selectNameFilter);
  const filterNumber = useSelector(selectNumberFilter)

  const handleNameChange = (e) => {
    dispatch(changeNameFilter(e.target.value));
  };

  const handleNumberChange = (e) => {
    dispatch(changeNumberFilter(e.target.value));
  };

  return (
    <div className={s.container}>
      <label  className={s.label}>Find contacts by name
      <input
        name="name"
        type="text"
        value={filterName}
        onChange={handleNameChange}
        className={s.input}
        />
        </label>
      <label  className={s.label}>Find contacts by number
       <input
          name="number"
          type="text"
          value={filterNumber}
          onChange={handleNumberChange}
          className={s.input}
        />
        </label>
    </div>
  );
};

export default SearchBox;
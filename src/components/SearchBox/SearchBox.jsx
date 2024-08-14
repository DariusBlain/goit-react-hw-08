import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.container}>
      <p className={s.label}>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        className={s.input}
      />
    </div>
  );
};

export default SearchBox;
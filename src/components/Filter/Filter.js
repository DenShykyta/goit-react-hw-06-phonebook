import { useSelector, useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { setFilter } from 'redux/filterSlice';
import { getFilterValue } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  return (
    <label className={css.filter__text}>
      Find contacts by name
      <input
        className={css.filter__input}
        type="text"
        placeholder="Type name"
        value={filter}
        onChange={handleChange}
      ></input>
    </label>
  );
};

export default Filter;

import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getFilteredContacts } from 'redux/selectors';
import css from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(getFilteredContacts);
  return (
    <ul className={css.contacts__list}>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={css.contacts__item} key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            className={css.contacts__btn}
            onClick={() => dispatch(deleteContact(id))}
          >
            Del
          </button>
        </li>
      ))}
    </ul>
  );
}

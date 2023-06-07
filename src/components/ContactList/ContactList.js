import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContacts } from 'redux/contactsSlice';
import { getFilterValue } from 'redux/filterSlice';

import css from './ContactList.module.css';

export default function ContactList() {
  // const contacts = Object.values(useSelector(getContacts)).slice(0, -1);
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const getFilteredContacts = () => {
    const toLowercaseFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(toLowercaseFilter)
    );
  };

  const visibleContacts = getFilteredContacts();

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

ContactList.popTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDel: PropTypes.func.isRequired,
};

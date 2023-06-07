import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, getContacts } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';

import css from './Form.module.css';

export default function Form() {
  const dispatch = useDispatch();
  // const contacts = Object.values(useSelector(getContacts)).slice(0, -1);
  const contacts = useSelector(getContacts);
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === number
      )
    ) {
      Notiflix.Notify.info(`${name} or ${number} is already in contacts!`);
      return;
    }
    dispatch(addContact({ id: nanoid(), name, number }));

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <lable>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          // value={contacts.name}
        />
      </lable>
      <lable>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          // value={contacts.number}
        />
      </lable>
      <button type="submit" onSubmit={handleSubmit}>
        Add contact
      </button>
    </form>
  );
}

Form.popTypes = {
  onSubmit: PropTypes.func.isRequired,
};

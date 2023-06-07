export const getContacts = state => state.contacts.items;
export const getFilterValue = state => state.filter;

export const getFilteredContacts = ({ contacts: { items }, filter }) => {
  if (!filter) {
    return items;
  }
  const toLowercaseFilter = filter.toLowerCase();
  return items.filter(contact =>
    contact.name.toLowerCase().includes(toLowercaseFilter)
  );
};

import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';

export default function App() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 16,
        color: '#010101',
      }}
    >
      <Form />
      <Filter />
      <ContactList />
    </div>
  );
}

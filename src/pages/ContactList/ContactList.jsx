
import './ContactList.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import ContactItem from '../../components/ContactItem/ContactItem';

const ContactList = ({ stor, onDeleteContact, onToggleFavorite }) => {
  return (
    <div className='block'>
      <aside>
        <Sidebar stor={stor} />
      </aside>
      <main>
        <ContactItem stor={stor} onDeleteContact={onDeleteContact} onToggleFavorite={onToggleFavorite} />
      </main>
    </div>
  );
};

export default ContactList;


import './ContactItem.css';
import { useNavigate } from 'react-router-dom';

const ContactItem = ({ stor, onDeleteContact, onToggleFavorite }) => {
  const handleDeleteContact = (id) => {
    onDeleteContact(id);
  };

  const navigate = useNavigate();

  const toEdit = (contactId) => {
    navigate(`/update-contact/${contactId}`);
  };

  return (
    <div className='contactDiv'>
      {stor.map((contact) => (
        <div key={contact.id}>
          <div>
            <img
              className='rounded-circle'
              src={`https://randomuser.me/api/portraits/${contact.gender}/${contact.avatar}.jpg`}
              alt='avatar'
            />
          </div>

          <div>
            <ul className='ulContact'>
              <li>{contact.name}</li>
              <li>{contact.status}</li>
              <li>{contact.phone}</li>
              <li>{contact.email}</li>
              <li>{contact.gender}</li>
              <li>{contact.status}</li>
            </ul>
          </div>

          <div>
            <div>
              <button type='button' className='button_edit btn btn-secondary' onClick={() => toEdit(contact.id)}>
                Редагувати
              </button>
            </div>
            <div>
              <button className='btn btn-danger' onClick={() => handleDeleteContact(contact.id)}>
                Видалити
              </button>
            </div>
            <div>
              <button type='button' className={`button_favorite ${contact.favorite ? 'btn btn-primary' : 'btn btn-secondary'}`}
                onClick={() => onToggleFavorite(contact.id)}>
                  {contact.favorite ? '\u2605' : '\u2606'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactItem;
import './Sidebar.css'

import React from 'react';

const Sidebar = ({ stor }) => {
  const statusContact = {
    Work: 0,
    Family: 0,
    Private: 0,
    Friends: 0,
    Favorite: 0,
  };

  stor.forEach((contact) => {
    statusContact[contact.status] += 1;
    if (contact.favorite) {
      statusContact.Favorite += 1; 
    }
  });

  const allContacts = stor.length;

  return (
    <ul className='ulSidebar'>
      <li className='font-weight-bold'>
        All contacts <span className='text-danger'>{allContacts}</span>
      </li>
      <li>
        Work <span className='text-danger'>{statusContact.Work}</span>
      </li>
      <li>
        Family <span className='text-danger'>{statusContact.Family}</span>
      </li>
      <li>
        Private <span className='text-danger'>{statusContact.Private}</span>
      </li>
      <li>
        Friends <span className='text-danger'>{statusContact.Friends}</span>
      </li>
      <li>
        Favorite <span className='text-danger'>{statusContact.Favorite}</span>
      </li>
    </ul>
  );
};

export default Sidebar;
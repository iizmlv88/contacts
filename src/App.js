



// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import ContactList from './pages/ContactList/ContactList';
// import NewContact from './pages/NewContact/NewContact';
// import UpdateContact from './pages/UpdateContact/UpdateContact';
// import NotFound from './pages/NotFound/NotFound';
// import Header from './components/Header/Header';
// import Nav from './components/Nav/Nav';
// import { useState } from 'react';

// function App() {
//   const [stor, setStor] = useState([]);

//   const handleNewContact = (newContact) => {
//     setStor((prevStor) => [...prevStor, newContact]);
//     console.log(stor);
//   };

//   const deleteContact = (id) => {
//     setStor((prevStor) => prevStor.filter((contact) => contact.id !== id));
//   };

//   const toggleFavoriteStatus = (id) => {
//     const updatedStor = stor.map((contact) => {
//       if (contact.id === id) {
//         return { ...contact, favorite: !contact.favorite };
//       }
//       return contact;
//     });
//     setStor(updatedStor);
//   };

//   return (
//     <Router>
//       <div className='container'>
//         <header className='header'>
//           <Header />
//         </header>
//         <nav>
//           <Nav />
//         </nav>

//         <Routes>
//           <Route
//             path='/'
//             element={<ContactList stor={stor} onDeleteContact={deleteContact} onToggleFavorite={toggleFavoriteStatus} />}
//           />
//           <Route path='/new-contact' element={<NewContact onNewContact={handleNewContact} />} />
//           <Route path='/update-contact/:id' element={<UpdateContact stor={stor} setStor={setStor} />} />
//           <Route path='*' element={<NotFound />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactList from './pages/ContactList/ContactList';
import NewContact from './pages/NewContact/NewContact';
import UpdateContact from './pages/UpdateContact/UpdateContact';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { useState } from 'react';

function App() {
  const [stor, setStor] = useState([]);

  const handleNewContact = (newContact) => {
    setStor((prevStor) => [...prevStor, newContact]);
    console.log(stor);
  };

  const deleteContact = (id) => {
    setStor((prevStor) => prevStor.filter((contact) => contact.id !== id));
  };

  const toggleFavoriteStatus = (id) => {
    const updatedStor = stor.map((contact) => {
      if (contact.id === id) {
        return { ...contact, favorite: !contact.favorite };
      }
      return contact;
    });
    setStor(updatedStor);
  };

  return (
    <Router>
      <div className='container'>
        <header className='header'>
          <Header />
        </header>
        <nav>
          <Nav />
        </nav>

        <Routes>
          <Route
            path='/'
            element={<ContactList stor={stor} onDeleteContact={deleteContact} onToggleFavorite={toggleFavoriteStatus} />}
          />
          <Route path='/new-contact' element={<NewContact onNewContact={handleNewContact} />} />
          <Route path='/update-contact/:id' element={<UpdateContact stor={stor} setStor={setStor} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
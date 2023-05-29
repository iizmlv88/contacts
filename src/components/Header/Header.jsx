import './Header.css'
import { Link } from 'react-router-dom' 

const Header = () => {
    return (
        <>
       
            <div id='contactsApp'>
                ContactsApp
            </div>
            <nav className='nav'>
                <div>
                    <Link to='/'>Contact List</Link>
                </div>
                <div>
                   <Link to='/new-contact'>Add Contact</Link>
                </div> 
                {/* <div>
                   <Link to='/update-contact'>Update Contact</Link>
                </div>   */}
            </nav>
           
         
           
        </>
    )
}
export default Header


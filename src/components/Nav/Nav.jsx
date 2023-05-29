import './Nav.css'
import { Link } from 'react-router-dom' 

const Nav = () => {
    return (
         <nav className='nav_nav'>
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
    )
}
export default Nav
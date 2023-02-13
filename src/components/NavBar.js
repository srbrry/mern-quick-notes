// import styles.css from '../styles.css'
import { Link } from 'react-router-dom'
import * as userService from '../utilities/users-service'

// React has a built in <Link> component that is very helpful for SPAs. Clicking
// links in SPAs using <a> tags triggers an HTTP request and refreshes the page,
// but we do not want this on SPAs. So React has a <Link> component that 
// when clicked, renders the hyperlink without triggering an HTTP request.
//Links in buttons also are a good way
export default function NavBar({ user, setUser }){
    function handleLogOut(){
        userService.logOut()
        setUser(null)
    }
    return(
        <header>
            <ul className="navbar">
                <Link to="/orders">Order History</Link>
                    &nbsp; | &nbsp;
                <Link to="/orders/new">New Order</Link>
                &nbsp;
                <span>Welcome, {user.name}</span>
                &nbsp;&nbsp;
                <Link to="" onClick={handleLogOut}>Log Out</Link>
            </ul>
        </header>
    )
}
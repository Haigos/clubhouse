// styles & images
import './Navbar.css'
import ClubhouseIcon from '../assets/temple.svg'

// links
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <ul>
        <li className="logo">
          <img src={ClubhouseIcon} alt="cartoon temple logo" />
          <span>The Clubhouse</span>
        </li>

        <li><Link to="/login">Login</Link></li>

        <li><Link to="/signup">Signup</Link></li>

        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </div>
  )
}

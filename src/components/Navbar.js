// styles & images
import './Navbar.css'
import ClubhouseIcon from '../assets/temple.svg'
import { useLogout } from '../hooks/useLogout'

// links
import { Link } from 'react-router-dom'

export default function Navbar() {
  const { logout, isPending } = useLogout()

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
          {!isPending && <button className="btn" onClick={logout}>Logout</button>}
          {isPending && <button className="btn" onClick={logout}>Logging out</button>}
        </li>
      </ul>
    </div>
  )
}

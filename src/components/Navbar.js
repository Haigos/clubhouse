import { useAuthContext } from '../hooks/useAuthContext'

// styles & images
import './Navbar.css'
import ClubhouseIcon from '../assets/temple.svg'
import { useLogout } from '../hooks/useLogout'

// links
import { Link } from 'react-router-dom'

export default function Navbar() {
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()

  return (
    <div className='navbar'>
      <ul>
        <li className="logo">
          <img src={ClubhouseIcon} alt="cartoon temple logo" />
          <span>The Clubhouse</span>
        </li>

        {!user && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}

        {user && (
          <li>
            {!isPending && <button className="btn" onClick={logout}>Logout</button>}
            {isPending && <button className="btn" onClick={logout}>Logging out</button>}
          </li>
        )}
      </ul>
    </div>
  )
}

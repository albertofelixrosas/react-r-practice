import { NavLink } from 'react-router-dom';
import './navbar.css';

export const NavBar: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to={'/about'}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/'}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/users'}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Users
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

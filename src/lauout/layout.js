import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <div className="Nav">
        <h1>
          Math Magicians
        </h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Calculator">Calculator</NavLink>
        <NavLink to="/Quotes">Quotes</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

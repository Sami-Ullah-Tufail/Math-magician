import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <div className="Nav">
        <h1>
          Math Magicians
        </h1>
        <div className="Links">
          <NavLink className="linksdev" to="/">Home</NavLink>
          <NavLink className="linksdev" to="/Calculator">Calculator</NavLink>
          <NavLink className="linksdev" to="/Quotes">Quotes</NavLink>
        </div>
      </div>
      <div className="Viewer">
        <Outlet className="display" />
      </div>
    </div>
  );
}

import {useLocation,QueryNavLink,NavLink, Link , Outlet } from 'react-router-dom';
import './App.css';

function App() {

  function QueryNavLink({ to, ...props }) {
    let location = useLocation();
    return <NavLink to={to + location.search} {...props} />;
  }

  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav className="navbar">
          <Link to="/invoices">Invoices</Link> |{" "}
          <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;


import Auth from "./Auth";

const Header = async () => {


  return ( 
    <nav className="navbar">
      <div className="navbar-container">
        <h2>Expense Tracker</h2>
        <Auth />
      </div>
    </nav>
   );
}
 
export default Header;
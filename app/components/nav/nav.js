import UserInfo from "../user/navUser";
import styles from "./nav.css";

function NavBar() {
  return (
    <nav>
      <div className="company">
        <div className="company-brand">
          <div className="company-logo">
            <img src="/logo.png" alt="" />
          </div>
          <div className="company-name">Singapur Airlines</div>
        </div>
      </div>
      <div className="menu-options">
        <UserInfo></UserInfo>
        <div className="Logout">
          <img src="/logout.png" className="logout-logo"></img>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

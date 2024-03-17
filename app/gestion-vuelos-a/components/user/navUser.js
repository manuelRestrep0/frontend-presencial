import styles from "./navUser.css";

function UserInfo() {
  return (
    <div className="nav-user">
      <div className="nav-user-photo">
        <img src="/user.jpg" className="nav-user-profile-pic" alt="profile-pic"></img>
      </div>
      <div className="nav-user-text">
        <div className="nav-user-name">Maverick Smith Jostin</div>
        <div className="nav-user-role">Administrador</div>
      </div>
    </div>
  );
}

export default UserInfo;

import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/468813305_1303599427305985_6117223743132793316_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEdYIT2kQtP-MRVFh6LlhRYtBy0J7NjGje0HLQns2MaN422YuG4UBQ1AKe9iLwGjQ5XwWEwub3sfdmH6Y-sCCvy&_nc_ohc=jrhp2YrOICsQ7kNvgEA_Yqp&_nc_oc=AdiRueRbXDqLYzQI8SddNwl5zlacOKydOg6_xkwCc_lkIQ360EE2xdyFUmsMnINgWb0&_nc_zt=23&_nc_ht=scontent.fsgn8-3.fna&_nc_gid=A0WY-uxWSGvXSWkxlFKgqpc&oh=00_AYBUIZfb0KFrS_11l44PexuW-0SvLGbBDM6KP6gkq4hWVg&oe=67788769"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="duykhoa" name="name" />
          <label>Email</label>
          <input type="email" placeholder="duykhoanguyen321@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/472100764_1323699951962599_4245392513493443373_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFV0SVAHxyEDWEngVLGRXcMHaOt4wG65Hsdo63jAbrke14OXFo3_K8kM0p2qZQzmTxmz10VNm6LuM215OlMskcb&_nc_ohc=Yw7FrS3vt08Q7kNvgFrnfvO&_nc_oc=Adgnv8v_hP-Nxte3CVIrQv_HA6wLDBvNBtsYEUqerEoYe5r8nxPrEnG7OTVekP3m_L0&_nc_zt=23&_nc_ht=scontent.fsgn8-3.fna&_nc_gid=AzMdRB2LDlFeNjEtOcpZdga&oh=00_AYA5G4peO6hcDqOw4TpOeZwrmZwBEk_F96dXyPXxUhcPQw&oe=6778967E"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
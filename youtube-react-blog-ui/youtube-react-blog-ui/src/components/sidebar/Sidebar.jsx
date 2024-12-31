import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImg"
          src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/468813305_1303599427305985_6117223743132793316_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEdYIT2kQtP-MRVFh6LlhRYtBy0J7NjGje0HLQns2MaN422YuG4UBQ1AKe9iLwGjQ5XwWEwub3sfdmH6Y-sCCvy&_nc_ohc=jrhp2YrOICsQ7kNvgEA_Yqp&_nc_oc=AdiRueRbXDqLYzQI8SddNwl5zlacOKydOg6_xkwCc_lkIQ360EE2xdyFUmsMnINgWb0&_nc_zt=23&_nc_ht=scontent.fsgn8-3.fna&_nc_gid=AEfBtHvV8qEijXF2sJKDwez&oh=00_AYAaYATWVbYALVzza5hc4etWaeXCSDu_A3GPzQr7e4gIfA&oe=67788769"
          alt=""
        />
        <p>
          Chào bạn, tôi là Nguyễn Duy Khoa, một người đam mê công nghệ và phát triển phần mềm. Tôi luôn tìm kiếm cơ hội học hỏi và sáng tạo trong công việc. Blog này là nơi tôi chia sẻ những kiến thức và trải nghiệm trong hành trình phát triển bản thân. Cảm ơn bạn đã ghé thăm!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Games">
              Games
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-github"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
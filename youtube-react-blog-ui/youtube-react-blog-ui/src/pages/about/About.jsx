import { Link } from "react-router-dom";
import "./about.css";

export default function About() {
    return (
        <div className="about">
            <div className="aboutHeader">
                <img
                    className="aboutImg"
                    src="https://images.pexels.com/photos/12564068/pexels-photo-12564068.jpeg"
                    alt="About Me"
                />
                <div className="aboutOverlay">
                    <h1 className="aboutTitle">About Me</h1>
                </div>
            </div>
            <div className="aboutContent">
                <p>
                    Chào mừng bạn đến với blog cá nhân của tôi! Tôi là Nguyễn Duy Khoa, hay còn gọi là DuyKhoa, một lập trình viên đam mê công nghệ và yêu thích khám phá thế giới lập trình. Blog này là nơi tôi chia sẻ những kiến thức, kinh nghiệm mà tôi tích lũy được trong quá trình học tập và làm việc với các công nghệ hiện đại, đặc biệt là Java – ngôn ngữ lập trình mà tôi yêu thích.
                </p>
                <p>
                    Tôi đã có cơ hội làm việc với nhiều ngôn ngữ lập trình khác nhau như Java, Python, JavaScript, C++, và Ruby. Mỗi ngôn ngữ mang đến cho tôi những trải nghiệm riêng biệt, giúp tôi mở rộng tư duy và nâng cao kỹ năng giải quyết vấn đề trong các dự án thực tế. Tôi tin rằng việc học hỏi và chia sẻ kiến thức không chỉ giúp bản thân phát triển mà còn lan tỏa giá trị đến cộng đồng lập trình viên.
                </p>
                <p>
                    Ngoài niềm đam mê với công nghệ, tôi còn yêu thích một cuộc sống phong phú và cân bằng. Tôi thích nghe những giai điệu sâu lắng từ nhạc của Sơn Tùng M-TP, tham gia các hoạt động thể thao như chơi bóng đá và chạy bộ để rèn luyện sức khỏe. Tôi cũng yêu thích các lĩnh vực khác như âm nhạc, thể thao, thời trang, và các trò chơi công nghệ đầy sáng tạo. Với tôi, mỗi sở thích đều là một cách để tận hưởng cuộc sống và nạp thêm năng lượng cho công việc.
                </p>
            </div>
            <div className="aboutSidebar">
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
                        <a href="https://facebook.com" className="sidebarIcon fab fa-facebook-square" aria-label="Facebook"></a>
                        <a href="https://instagram.com" className="sidebarIcon fab fa-instagram-square" aria-label="Instagram"></a>
                        <a href="https://github.com" className="sidebarIcon fab fa-github" aria-label="GitHub"></a>
                        <a href="https://twitter.com" className="sidebarIcon fab fa-twitter-square" aria-label="Twitter"></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">BLOG</span>
        <span className="headerTitleLg">NGUYEN DUY KHOA</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/3368246/pexels-photo-3368246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
  );
}

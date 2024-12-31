// filepath: /d:/youtube-react-blog-ui/youtube-react-blog-ui/src/components/posts/Posts.jsx
import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post
        id="java"
        img="https://images.pexels.com/photos/9553909/pexels-photo-9553909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Chia sẻ kiến thức Java"
        categories={["Programming", "Java"]}
        date="1 hour ago"
        description="Java là một ngôn ngữ lập trình mạnh mẽ và phổ biến, được sử dụng rộng rãi trong phát triển ứng dụng web, ứng dụng di động và hệ thống nhúng. Trong bài viết này, chúng ta sẽ tìm hiểu về các khái niệm cơ bản của Java, bao gồm cú pháp, các kiểu dữ liệu, và cách viết các chương trình đơn giản."
      />
      <Post
        id="python"
        img="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Chia sẻ kiến thức Python"
        categories={["Programming", "Python"]}
        date="2 hours ago"
        description="Python là một ngôn ngữ lập trình dễ học và mạnh mẽ, được sử dụng rộng rãi trong phát triển web, khoa học dữ liệu, và trí tuệ nhân tạo. Trong bài viết này, chúng ta sẽ tìm hiểu về các khái niệm cơ bản của Python, bao gồm cú pháp, các kiểu dữ liệu, và cách viết các chương trình đơn giản."
      />
      <Post
        id="javascript"
        img="https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Chia sẻ kiến thức JavaScript"
        categories={["Programming", "JavaScript"]}
        date="3 hours ago"
        description="JavaScript là một ngôn ngữ lập trình phổ biến được sử dụng chủ yếu trong phát triển web. Trong bài viết này, chúng ta sẽ tìm hiểu về các khái niệm cơ bản của JavaScript, bao gồm cú pháp, các kiểu dữ liệu, và cách viết các chương trình đơn giản."
      />
      <Post
        id="cpp"
        img="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Chia sẻ kiến thức C++"
        categories={["Programming", "C++"]}
        date="4 hours ago"
        description="C++ là một ngôn ngữ lập trình mạnh mẽ và linh hoạt, được sử dụng rộng rãi trong phát triển phần mềm hệ thống và ứng dụng. Trong bài viết này, chúng ta sẽ tìm hiểu về các khái niệm cơ bản của C++, bao gồm cú pháp, các kiểu dữ liệu, và cách viết các chương trình đơn giản."
      />
      <Post
        id="ruby"
        img="https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Chia sẻ kiến thức Ruby"
        categories={["Programming", "Ruby"]}
        date="5 hours ago"
        description="Ruby là một ngôn ngữ lập trình dễ học và mạnh mẽ, được sử dụng rộng rãi trong phát triển web. Trong bài viết này, chúng ta sẽ tìm hiểu về các khái niệm cơ bản của Ruby, bao gồm cú pháp, các kiểu dữ liệu, và cách viết các chương trình đơn giản."
      />
      <Post
        id="experience"
        img="https://images.pexels.com/photos/5990737/pexels-photo-5990737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Chia sẻ về kinh nghiệm của tôi"
        categories={["Programming", "Experience"]}
        date="5 hours ago"
        description="Trong bài viết này, tôi sẽ chia sẻ về những kinh nghiệm của mình trong quá trình học tập và làm việc với các ngôn ngữ lập trình khác nhau. Tôi đã học và làm việc với nhiều ngôn ngữ lập trình như Java, Python, JavaScript, C++, và Ruby. Mỗi ngôn ngữ đều có những ưu điểm và nhược điểm riêng, và tôi đã học được rất nhiều từ việc sử dụng chúng trong các dự án thực tế. Hy vọng những chia sẻ này sẽ giúp ích cho các bạn trong quá trình học tập và làm việc của mình."
      />
    </div>
  );
}
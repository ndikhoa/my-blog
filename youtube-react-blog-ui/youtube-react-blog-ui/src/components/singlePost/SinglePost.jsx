import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  const { id } = useParams();

  const posts = {
    java: {
      title: "Chia sẻ kiến thức Java",
      img: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      author: "DuyKhoa",
      date: "1 day ago",
      content: `
        Java là một ngôn ngữ lập trình hướng đối tượng, được phát triển bởi Sun Microsystems vào năm 1995.
        Nó được thiết kế để có ít phụ thuộc vào nền tảng nhất có thể, cho phép các nhà phát triển "viết một lần, chạy mọi nơi" (WORA).
        Điều này có nghĩa là mã Java có thể chạy trên bất kỳ thiết bị nào có Máy ảo Java (JVM) mà không cần phải biên dịch lại.
        <br />
        <br />
        <strong>1. Lịch sử và sự phát triển của Java:</strong>
        <br />
        Java bắt đầu như một dự án nhỏ của Sun Microsystems vào đầu những năm 1990. Ban đầu, nó được gọi là Oak, nhưng sau đó được đổi tên thành Java.
        Với sự ra đời của World Wide Web, Java nhanh chóng trở thành một công cụ quan trọng cho phát triển ứng dụng web.
        <br />
        <br />
        <strong>2. Các tính năng chính của Java:</strong>
        <br />
        <ul>
          <li><strong>Đơn giản, dễ học và sử dụng:</strong> Cú pháp của Java được thiết kế để dễ hiểu và dễ viết.</li>
          <li><strong>Hướng đối tượng:</strong> Java hỗ trợ các khái niệm hướng đối tượng như kế thừa, đa hình và đóng gói.</li>
          <li><strong>Độc lập nền tảng:</strong> Mã Java có thể chạy trên bất kỳ thiết bị nào có JVM.</li>
          <li><strong>Bảo mật cao:</strong> Java có các tính năng bảo mật tích hợp để bảo vệ dữ liệu và ứng dụng.</li>
          <li><strong>Hiệu suất cao:</strong> Java sử dụng biên dịch Just-In-Time (JIT) để cải thiện hiệu suất.</li>
          <li><strong>Đa luồng:</strong> Java hỗ trợ lập trình đa luồng, cho phép thực hiện nhiều tác vụ đồng thời.</li>
          <li><strong>Động và mở rộng:</strong> Java có thể dễ dàng mở rộng với các thư viện và framework.</li>
        </ul>
        <br />
        <br />
        <strong>3. Ứng dụng của Java:</strong>
        <br />
        Java được sử dụng rộng rãi trong nhiều lĩnh vực khác nhau:
        <ul>
          <li><strong>Phát triển ứng dụng web:</strong> Java là nền tảng của nhiều ứng dụng web lớn như LinkedIn, Amazon và eBay.</li>
          <li><strong>Ứng dụng di động:</strong> Android, hệ điều hành di động phổ biến nhất, sử dụng Java làm ngôn ngữ chính.</li>
          <li><strong>Hệ thống nhúng:</strong> Java được sử dụng trong các thiết bị nhúng như TV thông minh và thiết bị IoT.</li>
          <li><strong>Ứng dụng doanh nghiệp:</strong> Java là lựa chọn hàng đầu cho các ứng dụng doanh nghiệp lớn nhờ tính ổn định và bảo mật.</li>
        </ul>
        <br />
        <br />
        <strong>4. Tương lai của Java:</strong>
        <br />
        Với cộng đồng lớn mạnh và tài liệu phong phú, Java tiếp tục là một trong những ngôn ngữ lập trình phổ biến nhất trên thế giới.
        Các phiên bản mới của Java liên tục được phát hành với các tính năng và cải tiến mới, đảm bảo rằng Java sẽ tiếp tục phát triển và đáp ứng nhu cầu của các nhà phát triển.
      `,
    },
    // Thêm các bài viết khác ở đây
    python: {
      title: "Chia sẻ kiến thức Python",
      img: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      author: "DuyKhoa",
      date: "2 days ago",
      content: `
    Python là một ngôn ngữ lập trình bậc cao, được tạo ra bởi Guido van Rossum và phát hành lần đầu vào năm 1991.
    Python nổi tiếng với cú pháp rõ ràng và dễ đọc, giúp các lập trình viên dễ dàng học và sử dụng.
    <br />
    <br />
    <strong>1. Lịch sử và sự phát triển của Python:</strong>
    <br />
    Python được phát triển bởi Guido van Rossum vào cuối những năm 1980 và phát hành lần đầu vào năm 1991.
    Từ đó, Python đã phát triển mạnh mẽ và trở thành một trong những ngôn ngữ lập trình phổ biến nhất trên thế giới.
    <br />
    <br />
    <strong>2. Các tính năng chính của Python:</strong>
    <br />
    <ul>
      <li><strong>Dễ học và sử dụng:</strong> Cú pháp của Python rất rõ ràng và dễ đọc, giúp lập trình viên dễ dàng học và viết mã.</li>
      <li><strong>Đa năng:</strong> Python có thể được sử dụng cho nhiều mục đích khác nhau, từ phát triển web đến khoa học dữ liệu và trí tuệ nhân tạo.</li>
      <li><strong>Thư viện phong phú:</strong> Python có một hệ sinh thái thư viện phong phú, giúp lập trình viên dễ dàng tìm thấy các công cụ cần thiết cho công việc của mình.</li>
      <li><strong>Hỗ trợ cộng đồng mạnh mẽ:</strong> Python có một cộng đồng lớn mạnh, luôn sẵn sàng hỗ trợ và chia sẻ kiến thức.</li>
      <li><strong>Đa nền tảng:</strong> Python có thể chạy trên nhiều hệ điều hành khác nhau như Windows, macOS và Linux.</li>
    </ul>
    <br />
    <br />
    <strong>3. Ứng dụng của Python:</strong>
    <br />
    Python được sử dụng rộng rãi trong nhiều lĩnh vực khác nhau:
    <ul>
      <li><strong>Phát triển web:</strong> Python là nền tảng của nhiều ứng dụng web lớn như Instagram, Spotify và Dropbox.</li>
      <li><strong>Khoa học dữ liệu:</strong> Python là ngôn ngữ chính cho các nhà khoa học dữ liệu nhờ các thư viện như Pandas, NumPy và Matplotlib.</li>
      <li><strong>Trí tuệ nhân tạo:</strong> Python là lựa chọn hàng đầu cho phát triển các ứng dụng trí tuệ nhân tạo và học máy.</li>
      <li><strong>Tự động hóa:</strong> Python được sử dụng để tự động hóa các tác vụ lặp đi lặp lại, giúp tiết kiệm thời gian và công sức.</li>
    </ul>
    <br />
    <br />
    <strong>4. Tương lai của Python:</strong>
    <br />
    Với sự phát triển không ngừng của cộng đồng và các phiên bản mới, Python tiếp tục là một trong những ngôn ngữ lập trình phổ biến và mạnh mẽ nhất.
    Python sẽ tiếp tục phát triển và đáp ứng nhu cầu của các lập trình viên trong tương lai.
    `,
    },
    // Thêm các bài viết khác ở đây
    javascript: {
      title: "Chia sẻ kiến thức JavaScript",
      img: "https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      author: "DuyKhoa",
      date: "3 days ago",
      content: `
        JavaScript là một ngôn ngữ lập trình phổ biến được sử dụng chủ yếu trong phát triển web. Trong bài viết này, chúng ta sẽ tìm hiểu về các khái niệm cơ bản của JavaScript, bao gồm cú pháp, các kiểu dữ liệu, và cách viết các chương trình đơn giản.
        <br />
        <br />
        <strong>1. Lịch sử và sự phát triển của JavaScript:</strong>
        <br />
        JavaScript được phát triển bởi Brendan Eich vào năm 1995 khi ông làm việc tại Netscape Communications Corporation. Ban đầu, nó được gọi là Mocha, sau đó đổi tên thành LiveScript và cuối cùng là JavaScript.
        <br />
        <br />
        <strong>2. Các tính năng chính của JavaScript:</strong>
        <br />
        <ul>
          <li><strong>Đơn giản và dễ học:</strong> JavaScript có cú pháp dễ hiểu và dễ học, giúp lập trình viên nhanh chóng làm quen và sử dụng.</li>
          <li><strong>Đa năng:</strong> JavaScript có thể được sử dụng cho cả phía client và phía server, giúp phát triển ứng dụng web toàn diện.</li>
          <li><strong>Thư viện và framework phong phú:</strong> JavaScript có nhiều thư viện và framework hỗ trợ như React, Angular, và Vue.js, giúp lập trình viên phát triển ứng dụng nhanh chóng và hiệu quả.</li>
          <li><strong>Đa nền tảng:</strong> JavaScript có thể chạy trên nhiều hệ điều hành và trình duyệt khác nhau.</li>
        </ul>
        <br />
        <br />
        <strong>3. Ứng dụng của JavaScript:</strong>
        <br />
        JavaScript được sử dụng rộng rãi trong nhiều lĩnh vực khác nhau:
        <ul>
          <li><strong>Phát triển web:</strong> JavaScript là ngôn ngữ chính cho phát triển ứng dụng web, từ giao diện người dùng đến logic phía server.</li>
          <li><strong>Ứng dụng di động:</strong> JavaScript có thể được sử dụng để phát triển ứng dụng di động thông qua các framework như React Native.</li>
          <li><strong>Ứng dụng desktop:</strong> JavaScript có thể được sử dụng để phát triển ứng dụng desktop thông qua các framework như Electron.</li>
          <li><strong>Trò chơi:</strong> JavaScript có thể được sử dụng để phát triển trò chơi trên web.</li>
        </ul>
        <br />
        <br />
        <strong>4. Tương lai của JavaScript:</strong>
        <br />
        Với sự phát triển không ngừng của cộng đồng và các phiên bản mới, JavaScript tiếp tục là một trong những ngôn ngữ lập trình phổ biến và mạnh mẽ nhất. JavaScript sẽ tiếp tục phát triển và đáp ứng nhu cầu của các lập trình viên trong tương lai.
      `,
    },

    cpp: {
      title: "Chia sẻ kiến thức C++",
      img: "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      author: "DuyKhoa",
      date: "3 days ago",
      content: `
        C++ là một ngôn ngữ lập trình mạnh mẽ và linh hoạt, được sử dụng rộng rãi trong phát triển phần mềm hệ thống và ứng dụng. Trong bài viết này, chúng ta sẽ tìm hiểu về các khái niệm cơ bản của C++, bao gồm cú pháp, các kiểu dữ liệu, và cách viết các chương trình đơn giản.
        <br />
        <br />
        <strong>1. Lịch sử và sự phát triển của C++:</strong>
        <br />
        C++ được phát triển bởi Bjarne Stroustrup vào năm 1979 tại Bell Labs. Ban đầu, nó được gọi là "C with Classes" và sau đó được đổi tên thành C++ vào năm 1983.
        <br />
        <br />
        <strong>2. Các tính năng chính của C++:</strong>
        <br />
        <ul>
          <li><strong>Hiệu suất cao:</strong> C++ được thiết kế để có hiệu suất cao, giúp phát triển các ứng dụng yêu cầu tài nguyên lớn.</li>
          <li><strong>Hướng đối tượng:</strong> C++ hỗ trợ các khái niệm hướng đối tượng như kế thừa, đa hình và đóng gói.</li>
          <li><strong>Đa nền tảng:</strong> C++ có thể chạy trên nhiều hệ điều hành khác nhau, bao gồm Windows, macOS và Linux.</li>
          <li><strong>Thư viện phong phú:</strong> C++ có một hệ sinh thái thư viện phong phú, giúp lập trình viên dễ dàng tìm thấy các công cụ cần thiết cho công việc của mình.</li>
        </ul>
        <br />
        <br />
        <strong>3. Ứng dụng của C++:</strong>
        <br />
        C++ được sử dụng rộng rãi trong nhiều lĩnh vực khác nhau:
        <ul>
          <li><strong>Phát triển phần mềm hệ thống:</strong> C++ là ngôn ngữ chính cho phát triển hệ điều hành, trình biên dịch và các phần mềm hệ thống khác.</li>
          <li><strong>Ứng dụng doanh nghiệp:</strong> C++ được sử dụng để phát triển các ứng dụng doanh nghiệp lớn nhờ tính ổn định và bảo mật.</li>
          <li><strong>Trò chơi:</strong> C++ là ngôn ngữ chính cho phát triển trò chơi nhờ hiệu suất cao và khả năng kiểm soát tài nguyên.</li>
          <li><strong>Ứng dụng nhúng:</strong> C++ được sử dụng trong các thiết bị nhúng như TV thông minh và thiết bị IoT.</li>
        </ul>
        <br />
        <br />
        <strong>4. Tương lai của C++:</strong>
        <br />
        Với sự phát triển không ngừng của cộng đồng và các phiên bản mới, C++ tiếp tục là một trong những ngôn ngữ lập trình phổ biến và mạnh mẽ nhất. C++ sẽ tiếp tục phát triển và đáp ứng nhu cầu của các lập trình viên trong tương lai.
      `,
    },
    ruby: {
      title: "Chia sẻ kiến thức Ruby",
      img: "https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      author: "DuyKhoa",
      date: "4 days ago",
      content: `
        Ruby là một ngôn ngữ lập trình dễ học và mạnh mẽ, được sử dụng rộng rãi trong phát triển web. Trong bài viết này, chúng ta sẽ tìm hiểu về các khái niệm cơ bản của Ruby, bao gồm cú pháp, các kiểu dữ liệu, và cách viết các chương trình đơn giản.
        <br />
        <br />
        <strong>1. Lịch sử và sự phát triển của Ruby:</strong>
        <br />
        Ruby được phát triển bởi Yukihiro "Matz" Matsumoto và được phát hành lần đầu vào năm 1995. Ruby được thiết kế để dễ đọc và dễ viết, với cú pháp rõ ràng và ngắn gọn.
        <br />
        <br />
        <strong>2. Các tính năng chính của Ruby:</strong>
        <br />
        <ul>
          <li><strong>Đơn giản và dễ học:</strong> Ruby có cú pháp rõ ràng và dễ hiểu, giúp người mới học dễ dàng tiếp cận.</li>
          <li><strong>Hướng đối tượng:</strong> Ruby hỗ trợ các khái niệm hướng đối tượng như kế thừa, đa hình và đóng gói.</li>
          <li><strong>Thư viện phong phú:</strong> Ruby có một hệ sinh thái thư viện phong phú, giúp lập trình viên dễ dàng tìm thấy các công cụ cần thiết cho công việc của mình.</li>
          <li><strong>Đa nền tảng:</strong> Ruby có thể chạy trên nhiều hệ điều hành khác nhau, bao gồm Windows, macOS và Linux.</li>
        </ul>
        <br />
        <br />
        <strong>3. Ứng dụng của Ruby:</strong>
        <br />
        Ruby được sử dụng rộng rãi trong nhiều lĩnh vực khác nhau:
        <ul>
          <li><strong>Phát triển web:</strong> Ruby là ngôn ngữ chính cho phát triển ứng dụng web, với framework nổi tiếng là Ruby on Rails.</li>
          <li><strong>Ứng dụng doanh nghiệp:</strong> Ruby được sử dụng để phát triển các ứng dụng doanh nghiệp lớn nhờ tính ổn định và bảo mật.</li>
          <li><strong>Trò chơi:</strong> Ruby có thể được sử dụng để phát triển trò chơi trên web.</li>
          <li><strong>Tự động hóa:</strong> Ruby được sử dụng để tự động hóa các tác vụ lặp đi lặp lại, giúp tiết kiệm thời gian và công sức.</li>
        </ul>
        <br />
        <br />
        <strong>4. Tương lai của Ruby:</strong>
        <br />
        Với sự phát triển không ngừng của cộng đồng và các phiên bản mới, Ruby tiếp tục là một trong những ngôn ngữ lập trình phổ biến và mạnh mẽ nhất. Ruby sẽ tiếp tục phát triển và đáp ứng nhu cầu của các lập trình viên trong tương lai.
      `,
    },
    experience: {
      title: "Chia sẻ về kinh nghiệm của tôi",
      img: "https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      author: "DuyKhoa",
      date: "2 days ago",
      content: `
        Trong bài viết này, tôi sẽ chia sẻ về những kinh nghiệm của mình trong quá trình học tập và làm việc với các ngôn ngữ lập trình khác nhau.
        Tôi đã học và làm việc với nhiều ngôn ngữ lập trình như Java, Python, JavaScript, C++, và Ruby. Mỗi ngôn ngữ đều có những ưu điểm và nhược điểm riêng, và tôi đã học được rất nhiều từ việc sử dụng chúng trong các dự án thực tế.
        <br />
        <br />
        <strong>1. Kinh nghiệm với Java:</strong>
        <br />
        Java là ngôn ngữ lập trình đầu tiên mà tôi học. Tôi đã sử dụng Java để phát triển nhiều ứng dụng web và di động. Java có cú pháp rõ ràng và dễ hiểu, giúp tôi dễ dàng tiếp cận và học hỏi.
        <br />
        <br />
        <strong>2. Kinh nghiệm với Python:</strong>
        <br />
        Python là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án khoa học dữ liệu và trí tuệ nhân tạo. Python có cú pháp rõ ràng và dễ hiểu, giúp tôi dễ dàng viết mã và thực hiện các tác vụ phức tạp.
        <br />
        <br />
        <strong>3. Kinh nghiệm với JavaScript:</strong>
        <br />
        JavaScript là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án phát triển web. JavaScript có cú pháp dễ hiểu và dễ học, giúp tôi dễ dàng phát triển các ứng dụng web tương tác.
        <br />
        <br />
        <strong>4. Kinh nghiệm với C++:</strong>
        <br />
        C++ là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án phát triển phần mềm hệ thống. C++ có cú pháp phức tạp hơn so với các ngôn ngữ khác, nhưng nó cung cấp nhiều tính năng mạnh mẽ giúp tôi phát triển các ứng dụng hiệu suất cao.
        <br />
        <br />
        <strong>5. Kinh nghiệm với Ruby:</strong>
        <br />
        Ruby là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án phát triển web. Ruby có cú pháp rõ ràng và dễ hiểu, giúp tôi dễ dàng viết mã và phát triển các ứng dụng web nhanh chóng.
        <br />
        <br />
        Hy vọng những chia sẻ này sẽ giúp ích cho các bạn trong quá trình học tập và làm việc của mình.
      `,
    },

  };


  const post = posts[id];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={post.img} alt="" />
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                {post.author}
              </Link>
            </b>
          </span>
          <span>{post.date}</span>
        </div>
        <p className="singlePostDesc" dangerouslySetInnerHTML={{ __html: post.content }}></p>
      </div>
    </div>
  );
}
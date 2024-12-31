import "./contact.css";

export default function Contact() {
    return (
        <div className="contact">
            <div className="contactHeader">
                <h1 className="contactTitle">Contact Me</h1>
            </div>
            <div className="contactContent">
                <div className="contactInfoSection">
                    <div className="contactInfo">
                        <div className="contactInfoItem">
                            <i className="contactIcon fas fa-user"></i>
                            <span>Nguyễn Duy Khoa</span>
                        </div>
                        <div className="contactInfoItem">
                            <i className="contactIcon fas fa-envelope"></i>
                            <span>duykhoanguyen321@gmail.com</span>
                        </div>
                        <div className="contactInfoItem">
                            <i className="contactIcon fas fa-phone"></i>
                            <span>+84 377 995 502</span>
                        </div>
                        <div className="contactSocial">
                            <div className="contactSocialIcons">
                                <a href="https://facebook.com" className="contactIcon fab fa-facebook-square" aria-label="Facebook"></a>
                                <a href="https://instagram.com" className="contactIcon fab fa-instagram-square" aria-label="Instagram"></a>
                                <a href="https://github.com" className="contactIcon fab fa-github" aria-label="GitHub"></a>
                                <a href="https://twitter.com" className="contactIcon fab fa-twitter-square" aria-label="Twitter"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contactFormSection">
                    <form className="contactForm">
                        <input type="text" placeholder="Your Name" className="contactInput" />
                        <input type="email" placeholder="Your Email" className="contactInput" />
                        <textarea placeholder="Your Message" className="contactTextarea"></textarea>
                        <button type="submit" className="contactButton">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
import Link from "next/link";
import { Logo } from "../icons/Logo";
import { SocialList } from "../SocialList/SocialList";
import "./Footer.css";
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {" "}
          <div className="footer-main df">
            <div className="footer-legal">
              <ul className="list footer-legal__list df">
                <li className="legal-item">
                  <Link href={"#"} className="legal-text">
                    Privacy
                  </Link>
                </li>
                <li className="legal-item">
                  <Link href={"#"} className="legal-text">
                    Term & Conditions
                  </Link>
                </li>
                <li className="legal-item">
                  <Link href={"#"} className="legal-text">
                    Help
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-logo">
              {" "}
              <div className="shop-logo">
                <Link href={"/"}>
                  <Logo />
                </Link>
              </div>
            </div>
            <div className="footer-social df">
              <span className="footer-social--title legal-text">
                Follow Us on Social:
              </span>
              <SocialList className="df footer-social__list" />
            </div>
          </div>
          <div className="footer-bottom">
            <div className="shop-copy df">
              <span>Copyring © Viachas Kul. All right reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

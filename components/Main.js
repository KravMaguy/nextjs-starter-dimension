import PropTypes from "prop-types";
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
// import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
// import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
// import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import { FiGithub, FiLink, FiFacebook } from "react-icons/fi";
import Link from "next/link";

import Intro from "../pages/intro.js";
import About from "../pages/about.js";
import Work from "../pages/work.js";
import MailForm from "./MailForm";
class Main extends React.Component {
  render() {
    const { article, formCloser } = this.props;
    const closeHandler = () => {
      this.props.onCloseArticle();
      if (article === "contact") {
        console.log("the form was closed");
        formCloser();
      }
    };

    let close = (
      <div
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            closeHandler();
          }
        }}
        tabIndex={0}
        className="close"
        onClick={() => {
          closeHandler();
        }}
      >
        {/* <Link href="/">
          <a></a>
        </Link> */}
      </div>
    );

    return (
      <div
        id="main"
        style={this.props.timeout ? { display: "flex" } : { display: "none" }}
      >
        <Intro
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
          close={close}
        />
        <Work
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
          close={close}
        />
        <About
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
          close={close}
        />
        <article
          id="contact"
          className={`${this.props.article === "contact" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Contact</h2>
          <MailForm FormIsOpen={this.props.FormIsOpen} />
          <ul className="icons">
            <li>
              <a href="#" className="social">
                {" "}
                <FiFacebook />
              </a>
            </li>
            <li>
              <a href="#" className="social">
                {" "}
                <FiLink />
              </a>
            </li>
            <li>
              <a href="#" className="social">
                <FiGithub />
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Main;

import PropTypes from "prop-types";
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
// import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
// import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
// import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import { FiGithub, FiLink, FiFacebook } from "react-icons/fi";
import Link from "next/link";

import Intro from "../pages/intro.js";
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
        <Link href="http://localhost:3000/">
          <a></a>
        </Link>
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
        <article
          id="work"
          className={`${this.props.article === "work" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img
              src="/static/images/lease_warehouses.jpg"
              alt="Screenshot of a website for leasing and listing commercial warehouses"
            />
          </span>
          <h2>
            React and Firebase Progressive Web App, with IVR system scheduling,
            Web Push, Twilio, SendGrid, and Paypal integration
          </h2>
          <dl>
            <dt>Tags</dt>
            <dd>Coding and Design</dd>
            <dt>Technologies</dt>
            <dd>React, Maps, Firebase, Twilio, Sendgrid, Paypal</dd>
            <dt>Categories</dt>
            <dd>Front End Development, Back End Development, Logo Design</dd>
            <dt>Link</dt>
            <dd>
              <a href="https://www.leasewarehouses.net" target="_blank">
                Leasewarehouses.net
              </a>
            </dd>

            <dt>Buisness Solution</dt>
            <dd>
              <p>
                A local real estate company that wanted a dynamic listing
                platform, as well as scheduling and the ability to charge for
                rental applications or issue coupons for free showings to
                realtors.
              </p>
            </dd>
            <dt>Project Description</dt>
            <dd>
              <p>
                Lease Warehouses is a Full stack React.js firebase application
                with complete IVR system that confirms and cancels meetings,
                texts directions to chosen buildings where a meeting is
                scheduled as well as a reminder 24 hours before the meeting
                takes place. The app utilizes web push notifications, puppeteer,
                twilio, paypal and google maps api.
              </p>
              <p>
                A manager has the option to take payments for a commercial
                leasing application or use the coupon feature to generate a free
                booking ticket. Upon making a booking puppeteer will generate a
                copy of the map and sendgrid will email that copy along with the
                chosen building space plan to the individuals email adress.
              </p>
              <p>
                If a customer entered a cell phone in the paypal api form,
                twilio will utilize sms messages to text a link that can be used
                while driving to navigate to the chosen building with the space
                for lease along with prompting the user to cancel or confirm the
                meeting. If the customer entered a landline when the payment or
                free form was filled out twilio API will utilize voice IVR to
                complete the cancel/confirm appointment feature. The card
                component on the map also updates the data to show available
                spaces and calculates the rent.
              </p>
            </dd>
            <dt>Improvements</dt>
            <dd>
              The problem with this app is that the Firebase/Create React App
              stack might not be the best. It does not implement SEO out of the
              box, it does not come with server side rendering. I implemented
              some of these features manually i.e. React-Helmet for SEO, and
              prerender.io. Firebase/React is a good enough stack for an
              internal company app, but something like Next.js is better for
              production apps.
            </dd>
          </dl>
          <span className="image main">
            <img
              src="/static/images/Mapbox3D.jpg"
              alt="Mapbox app screenshot"
            />
          </span>
          <h2>
            MapBox 3D Application with QGIS , geolocation of spaceplans on the
            map, 3D extrusions, tooltips on hover, nightmode and satallite view
          </h2>
          <dl>
            <dt>Tags</dt>
            <dd>Coding</dd>
            <dt>Technologies</dt>
            <dd>MapBox Api, QGIS, Jquery</dd>
            <dt>Categories</dt>
            <dd>Front End Development</dd>
            <dt>Project Demo</dt>
            <dd>
              <a
                href="https://www.youtube.com/watch?v=cl7o6uRBmAs"
                target="_blank"
              >
                Map Box App Demo
              </a>
            </dd>
            <dt>Buisness Solution</dt>
            <dd>
              <p>
                Show Potential tenants a visual representation of a commercial
                warehouse. The company wanted a way to visually convey to
                potential tenants how a large warehouse was broken down into
                smaller units. And what the current build out looks like. They
                also wanted a way to integrate that with the current unit space
                plans.
              </p>
            </dd>
            <dt>Project Description</dt>
            <dd>
              <p>
                A Floor plan of the warehouse was located on the map using QGIS.
                Extrusions were drawn out in JSON using mapbox api and placed on
                top of the spaceplan. A fly to effect is applied when the
                building marker is clicked. Tooltips appear when an individual
                space is hovered and the space details update in the header.
                When a space is clicked on the map, an icon lights up in the
                footer and you can click to open a window displaying the
                spaceplan that was clicked as well as the streetview.
              </p>
            </dd>
            <dt>Improvements</dt>
            <dd>
              There was an issue with the 3d extrustions displaying properly on
              some apple phones that needs to be fixed before deployment.
            </dd>
          </dl>

          <span className="image main">
            <img
              src="/static/images/codepen_demo_greensock.jpg"
              alt="Codepen.io demo of using greensock to turn on a lightbulb"
            />
          </span>
          <h2>
            Turn on the lights in a warehouse using GreenSock and codepen.
          </h2>
          <dl>
            <dt>Tags</dt>
            <dd>Coding, Design</dd>

            <dt>Technologies</dt>
            <dd>Codepen.io, GSAP, Javascript Animation</dd>

            <dt>Categories</dt>
            <dd>Front End Development</dd>

            <dt>Live Link</dt>
            <dd>
              <a href="https://codepen.io/kravmaguy/pen/bPNaZJ" target="_blank">
                Codepen Link
              </a>
            </dd>

            <dt>Project Description</dt>
            <dd>
              <p>
                Creative coding exercise using GSAP (greensock animation
                platform), and SVG. Check out the logo animation intro and the
                lightbulb flickering, and overall lighting effects in the
                warehouse.
              </p>
            </dd>
            <dt>Improvements</dt>
            <dd>
              Maybe adjust the timing of the flickering, refactor the code.
              Overall it looks like a scary movie, and the dusty warehouse adds
              to the effect. Perhaps add a mouse scuffling across the floor for
              humor.
            </dd>
          </dl>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === "about" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">About</h2>
          <p>
            Abe enjoys studying foreign languages, travel, going to the gym, and
            martial arts, he currently resides in Chicago.
          </p>
          {close}
        </article>

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

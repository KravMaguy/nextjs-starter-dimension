import PropTypes from "prop-types";
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
// import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
// import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
// import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import { FiGithub, FiLink, FiFacebook } from "react-icons/fi";
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
      ></div>
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
            <dd>React, Maps, Express.Js, Firebase, Twilio, Sendgrid, Paypal</dd>
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
              src="/static/images/listing-app-screenshot.jpg"
              alt="Screenshot of a listing-app.com admin area, website for listing and leasing commercial real estate"
            />
          </span>
          <h2>
            A free listing platform for real estate for sale and for lease, any
            user can sign up and list spaces.
          </h2>
          <dl>
            <dt>Tags</dt>
            <dd>Coding and Design</dd>
            <dt>Technologies</dt>
            <dd>PHP, MySQL, Javascript, Jquery</dd>
            <dt>Categories</dt>
            <dd>
              Front End Development, Back End Development, Full Stack
              Development
            </dd>
            <dt>Link</dt>
            <dd>
              <a href="https://www.listing-app.com" target="_blank">
                Listing-app.com
              </a>
            </dd>

            <dt>Buisness Solution</dt>
            <dd>
              <p>
                Provide a free platform for anyone to easily list, and search
                for real estate for sale and for lease.
              </p>
            </dd>
            <dt>This Application fulfills the following user stories:</dt>
            <dd>
              <ul>
                <li>
                  A user can register for an account and login using email and
                  password
                </li>
                <li>
                  A user can register for an account and login using social
                  authentication (Facebook, LinkedIn, Microsoft Outlook 365)
                </li>
                <li>
                  A user can Create, Read, Update and delete his buildings
                  through the User Dashboard
                </li>
                <li>
                  A user can Create, Read, Update and delete units belonging to
                  individual buidlings through the User Dashboard
                </li>
                <li>
                  A user can Upload multiple images Belonging to a building
                </li>
                <li>
                  A user can Upload multiple images Belonging to an individual
                  Unit in a building that he has listed for lease
                </li>
                <li>
                  A user can set a featured image for a building as well as a
                  featured image for an individual unit
                </li>
                <li>
                  There is a gallery for each building, as well as a gallery for
                  each individual unit created from the uusers uploaded photos.
                </li>
                <li>
                  I can search the map by location and the map will tell me how
                  many buildings were found in that particular search area
                </li>
                <li>
                  After a search the map will display the city borders within a
                  polygon drawn upon the map
                </li>
                <li>
                  A user has the ability to publicly share a link of a map that
                  show only his listings
                </li>
                <li>I can get directions to any listed building</li>
                <li>
                  No one outside of the app sponsor can list any buildings
                  within 5 miles of the main buisness location
                </li>
                <li>
                  A superAdmin has the ability to delete a user and all his
                  buildings and spaceplans
                </li>
                <li>
                  If I am a first time user that has logged in to the user
                  dashboard i will get a tour showing me how to use the admin
                  dashboard
                </li>
              </ul>
            </dd>
            <dt>Improvements</dt>
            <dd>
              It is a fairly in depth application. Would be great to have some
              funding for it in order to be able to work with other programmers
              in order to organize, refactor the code and complete the project,
              convert existing procedural php code to object oriented php.
              Remove unused css. Run Webpack. Remove and consolidate repeated
              code.
            </dd>
          </dl>

          <span className="image main">
            <img
              src="/static/images/auth-0.jpg"
              alt="Screenshot of a auth0 application using social login"
            />
          </span>
          <h2>
            Auth 0 todos fullstack MERN application- fullstack todo application
            implementing social login, and auth0 as authentication API.
          </h2>
          <p>
            This application is a combination of two seperate tutorials:
            <br />
            <a
              href="https://www.youtube.com/watch?v=X__rLNfTsLg&ab_channel=WebDevJunkie"
              target="_blank"
            >
              FullStack react todo tutorial
            </a>{" "}
            - Credit Cody Sibert
            <br />
            <a
              href="https://www.youtube.com/watch?v=1rgeO_EbSGg&ab_channel=Auth0"
              target="_blank"
            >
              Auth 0 basic app startup
            </a>{" "}
            - Credit Auth 0
          </p>
          <dl>
            <dt>Tags</dt>
            <dd>Coding</dd>
            <dt>Technologies</dt>
            <dd>MongoDb, React, Auth0, Express</dd>
            <dt>Categories</dt>
            <dd>Full Stack Development</dd>
            <dt>Link</dt>
            <dd>
              <a
                href="https://github.com/KravMaguy/auth0-react-sdk-video"
                target="_blank"
              >
                React Auth0 todos
              </a>
            </dd>

            <dt>Buisness Solution</dt>
            <dd>
              <p>
                Learn to use Auth0 api by creating a full stack todo application
              </p>
            </dd>
            <dt>This application fulfills the following user stories:</dt>
            <dd>
              <ul>
                <li>A user can login using social login or email/password</li>
                <li>A user can create read update and delete his todos</li>
              </ul>
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
              src="/static/images/wordpress-rest-api.jpg"
              alt="wordpress rest api"
            />
          </span>
          <h2>Wordpress & Firebase Rest API</h2>
          <dl>
            <dt>Tags</dt>
            <dd>Coding</dd>
            <dt>Technologies</dt>
            <dd>Wordpress, Firebase</dd>
            <dt>Categories</dt>
            <dd>Front End Development</dd>
            <dt>Project Demo</dt>
            <dd>
              <a
                href="https://www.greatofficespaces.net/commercial-spaces-for-lease/"
                target="_blank"
              >
                Wordpress Rest Api Search Buildings on leasewarehouses
              </a>
            </dd>
            <dt>Repository</dt>
            <dd>
              <a
                href="https://github.com/KravMaguy/Wordpress-Firebase-Api"
                target="_blank"
              >
                Wordpress/Firebase Rest Api Repository
              </a>
            </dd>
            <dt>Buisness Solution</dt>
            <dd>
              <p>
                Give a potential tenant an interface to quickly search through
                all buildings listed in the database of another website.
              </p>
            </dd>
            <dt>Project Description</dt>
            <dd>
              <p>
                Makes a GET request to firebase database, and outputs all the
                availabilites on a wordpress website in a table, has search and
                filtering capabilites. Users can search buildings by name or
                description, or units by name, price, or size.
              </p>
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
              Perhaps adjust the timing of the flickering, refactor the code.
              Overall it looks like a scary movie, and the dusty warehouse adds
              to the effect. Add a mouse scuffling across the floor for humor.
            </dd>
          </dl>

          <span className="image main">
            <img
              src="/static/images/3d-floorplan.jpg"
              alt="3D floor plans buisness directory"
            />
          </span>
          <h2>3D floor plans buisness directory.</h2>
          <dl>
            <dt>Tags</dt>
            <dd>Coding, Design</dd>

            <dt>Technologies</dt>
            <dd>Animation Template, CSS, Javascript, Code Drops</dd>

            <dt>Categories</dt>
            <dd>Front End Development</dd>

            <dt>Live Link</dt>
            <dd>
              <a
                href="https://www.greatofficespaces.net/office-warehouse-for-lease/"
                target="_blank"
              >
                3D Floor plans of spaces and buisnesses in a commercial building
              </a>
            </dd>
            <dt>Original Article</dt>
            <dd>
              <a
                href="https://tympanus.net/codrops/2016/04/13/interactive-3d-mall-map/"
                target="_blank"
              >
                Interactive 3D Mall Map
              </a>
            </dd>

            <dt>Project Description</dt>
            <dd>
              <p>
                Display an office building lay out in the form of a 3D map, and
                layered Spaceplans, a user can search for a buisness in the
                building using the search form at the top. As well as go through
                the different levels of the building for a visual
                interpretation. Click anywhere on the intro screen to skip the
                introductory animation and go to the space plans.
              </p>
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
            Abe enjoys studying foreign languages, travel, and teaching martial
            arts.
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

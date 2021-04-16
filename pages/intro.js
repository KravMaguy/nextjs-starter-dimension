import Link from "next/link";

export default function Intro(props) {
  return (
    <article
      id="intro"
      className={`${props.article === "intro" ? "active" : ""} ${
        props.articleTimeout ? "timeout" : ""
      }`}
      style={{ display: "none" }}
    >
      <h2 className="major">intro</h2>

      <p>
        Hi! hire me to work for your company, I have experience in React.js, Firebase, Express, PHP, MySQL, as well as building custom sites and plugins in Wordpress and Elementor.
        I will not rest until I squash all your software bugs, and fully optimize your codebase! I literally loose sleep at night when software is not working properly. In my freetime I enjoy thinking about ways to write more efficient algorithms, so you can definitely count on me to get the job done!
        I have built large custom fullstack applications in React and Express as well as in PHP Mysql that implement Geolocation, IVR systems and SMS messaging, Progressive web apps, Payment integrations, and Workflow automations. I probably have more experience than your average bootcamp graduate or college undergraduate, so give me a chance to show you what I can do for your company!
      </p>
      <p>Web and Application development:</p>
      <ul className="a">
        <li>Javascript</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>WAMP Stack</li>
        <li>PHP, MySQL</li>
        <li>API integrations</li>
        <li>Basic Git and Github</li>
        <li>Progressive Web App</li>
        <li>Geolocation</li>
        <li>Workflow Automation</li>
        <li>Custom Wordpress and Plugin Development</li>

      </ul>

      <p>Foreign Languages:</p>
      <ul className="a">
        <li>English</li>
        <li>Spanish</li>
        <li>Hebrew</li>
        <li>Arabic</li>
        <li>French</li>
        <li>Portuguese</li>
        <li>Russian</li>
        <li>Persian</li>




      </ul>

      <p>Engineering Principles:</p>
      <ul className="a">
        <li>OOP</li>
        <li>Functional Programming</li>
      </ul>

      <p>
        {" "}
        {/* Some of his work is in private repositories but source code can be
          made available upon request. */}
      </p>

      {props.close}
    </article>
  );
}

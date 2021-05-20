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
      Skilled programmer in Javascript, React.js, and PHP. I will not rest until all your bugs have been squashed, and your codebase is fully optimized. I have built custom fullstack applications and REST API's for the construction and real estate industry! In my freetime I enjoy thinking about ways to write more efficient algorithms, so you can definitely count on me to get the job done!
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

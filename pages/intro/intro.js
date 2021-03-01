export default function Intro(props) {
  return (
    <article
      id="intro"
      className={`${props.article === "intro" ? "active" : ""} ${
        props.articleTimeout ? "timeout" : ""
      }`}
      style={{ display: "none" }}
    >
      <h2 className="major">Intro</h2>
      {/* <span className="image main">
          <img src="/static/images/pic01.jpg" alt="" />
        </span> */}
      <p>
        Abe is looking for a position with a software company where he will be
        able to contribute to the success of the company by utilizing his skills
        in javascript and web development. Ideally, the firm will offer future
        growth opportunities. He has 3-4 years of experience in the field of
        computer programming, digital marketing, and design. His skills include
        but are not limited to.
      </p>
      <p>Web and Application development:</p>
      <ul className="a">
        <li>Javascript</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>WAMP Stack</li>
        <li>PHP, MySQL</li>
        <li>API integration</li>
        <li>Basic Git and Github</li>
        <li>Progressive Web App</li>
        <li>Geolocation</li>
        <li>Basic Workflow Automation</li>
      </ul>

      <p>Engineering Principles:</p>
      <ul className="a">
        <li>Stacks</li>
        <li>Queues</li>
        <li>Binary Trees</li>
        <li>Linked List</li>
        <li>JS runtime and Event Loop</li>
        <li>Closures</li>
        <li>This &#38; Object prototypes</li>
      </ul>

      <p>Digital Marketing:</p>
      <ul className="a">
        <li>SEO</li>
        <li>Paid Advertising (PPC Google and Bing Ads management)</li>
        <li>Blogging</li>
        <li>Search Engine Marketing</li>
        <li>Social Media</li>
      </ul>

      <p>Design:</p>
      <ul className="a">
        <li>Adobe Creative Cloud</li>
        <li>Logo Creation</li>
        <li>SVG</li>
        <li>CodePen Creative Animations</li>
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

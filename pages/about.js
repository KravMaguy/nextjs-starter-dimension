const About = (props) => {
  return (
    <article
      id="about"
      className={`${props.article === "about" ? "active" : ""} ${
        props.articleTimeout ? "timeout" : ""
      }`}
      style={{ display: "none" }}
    >
      <h2 className="major">About</h2>
      <p>
        Abe enjoys studying foreign languages, travel, going to the gym, and
        martial arts, he currently resides in Chicago.
      </p>
      {props.close}
    </article>
  );
};

export default About;

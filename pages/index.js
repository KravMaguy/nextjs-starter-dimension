import Head from "next/head";
import stylesheet from "styles/main.scss";
// import "../static/css/avatar.css";
import Icon from "../components/SVG-Jobless";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ProfileImage from "../components/Profile-Image"
// import "../static/css/avatar.css";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: "",
      loading: "is-loading",
      isDrawing: false,
    };
    this.handleOpenArticle = this.handleOpenArticle.bind(this);
    this.handleCloseArticle = this.handleCloseArticle.bind(this);
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: "" });
    }, 100);
  }

  draw = () => {
    this.setState((prevState) => ({
      isDrawing: !prevState.isDrawing,
    }));
  };

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  handleOpenArticle(article) {
    if(this.state.isDrawing){this.draw()}
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article,
    });

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      });
    }, 325);

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout,
      });
    }, 350);
  }

  handleCloseArticle() {
    this.draw()
    this.setState({
      articleTimeout: !this.state.articleTimeout,
    });

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      });
    }, 325);

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: "",
      });
    }, 350);
  }
  render() {
    return (
      <div
        className={`body ${this.state.loading} ${
          this.state.isArticleVisible ? "is-article-visible" : ""
        }`}
      >
        <div>
          <Head>
            <title>Next.js Starter</title>
            <link
              href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i"
              rel="stylesheet"
            />
          </Head>

          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <div id="wrapper">
            <ProfileImage loading={this.state.loading} isDrawing={this.state.isDrawing}/>
            <Icon draw={this.draw} isDrawing={this.state.isDrawing} />

            <Header
              draw={this.state.isDrawing}
              isDrawing={this.draw}
              onOpenArticle={this.handleOpenArticle}
              timeout={this.state.timeout}
            />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
            />
            <Footer timeout={this.state.timeout} />
          </div>

          <div id="bg" />
        </div>
      </div>
    );
  }
}

export default IndexPage;

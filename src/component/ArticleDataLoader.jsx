import React from 'react';
import Page from './Page'

class ArticleDataLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articleTitle: null,
      articleBody: null,
      loading: true,
      articles: [1, 2, 3, 4, 5], // Assumption: we've already determined the number of articles to be rendered, e.g. from server request.
      allArticlesRead: false,
      error: null
    };
    this.retrieveArticleData = this.retrieveArticleData.bind(this);
  };

  componentDidMount() {
    this.retrieveArticleData();
  };

  checkIfAllArticlesRead = () => {
    if (this.state.articles.length === 0) {
      this.setState({
        allArticlesRead: true
      });
    };
  };

  async retrieveArticleData() {
    const currentArticle = this.getRandomArticleIndex();
    let json = null;
    try {
      const response = await fetch(`../data/article-${currentArticle}.json`);
      json = await response.json();
    } catch (error) {
      this.setState({ error: error });
    }

    const remainingArticles = this.state.articles.filter(index => index !== currentArticle);
    this.setState({
      articleTitle: json.title,
      articleBody: json.body,
      loading: false,
      articles: remainingArticles,
    });
    this.checkIfAllArticlesRead();
  };

  simulateNetworkError() {
    this.setState({ error: true });
  }

  getRandomArticleIndex() {
    return this.state.articles[Math.floor(Math.random() * this.state.articles.length)];
  };

  render() {
    const { articleTitle, articleBody, loading, allArticlesRead, error } = this.state;
    return (
      <>
        <Page articleTitle={articleTitle} articleBody={articleBody} loading={loading} error={error}
          allArticlesRead={allArticlesRead} handler={() => this.retrieveArticleData} />
        <div className="simulate-error-container">
          <button className="simulate-network-error" onClick={() => this.simulateNetworkError()}>Simulate network error</button>
        </div>
      </>
    );
  }
};

export default ArticleDataLoader;
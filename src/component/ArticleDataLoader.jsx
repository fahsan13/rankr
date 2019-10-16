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
          allArticlesRead: false
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
        const response = await fetch(`./data/article-${currentArticle}.json`);
        const json = await response.json();
        const remainingArticles = this.state.articles.filter(index => index !== currentArticle);

        this.setState({
            articleTitle: json.title,
            articleBody: json.body,
            loading: false,
            articles: remainingArticles,
        });
        this.checkIfAllArticlesRead();
    };

    getRandomArticleIndex () {
        return this.state.articles[Math.floor(Math.random() * this.state.articles.length)];
    };

    render() {
        const { articleTitle, articleBody, loading, allArticlesRead } = this.state;
        return (
          <Page articleTitle={articleTitle} articleBody={articleBody} loading={loading} allArticlesRead={allArticlesRead} handler={() => this.retrieveArticleData} />
        );
      }
};   

export default ArticleDataLoader;

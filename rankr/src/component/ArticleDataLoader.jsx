import { useState, useEffect } from 'react';

const ArticleDataLoader = () => {
    const [articleTitle, setArticleTitle] = useState(null);
    const [articleBody, setArticleBody] = useState([]);
    const [loading, setLoading] = useState(true);
    const articles = [1, 2, 3, 4, 5];

    const getRandomArticle = () => {
        return articles[Math.floor(Math.random() * articles.length)]
    };

    const retrieveArticleData = async () => {
        const response = await fetch(`./data/article-${getRandomArticle()}.json`)
        const json = await response.json();
        setArticleTitle(json.title);
        setArticleBody(json.body);
        setLoading(false);
    };

    useEffect(() => {
        retrieveArticleData();
      }, []);
    return [articleTitle, articleBody, loading];
};   

export default ArticleDataLoader;

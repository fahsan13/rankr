import React, { useState, useEffect } from 'react';
import ArticleElement from './ArticleElement';

const Article = () => {
    const [articleTitle, setArticleTitle] = useState(null);
    const [articleBody, setArticleBody] = useState([]);

    const retrieveArticleData = async () => {
        const response = await fetch('./data/article-1.json')
        const json = await response.json();
        setArticleTitle(json.title);
        setArticleBody(json.body);
    };

    useEffect(() => {
        retrieveArticleData();
      }, []);

    return (
        <>
            <h1>{articleTitle}</h1>
            {articleBody.map((articleElement, key) => <ArticleElement type={articleElement.type} model={articleElement.model} key={key} />)}
        </>
    ); 
};   

export default Article;

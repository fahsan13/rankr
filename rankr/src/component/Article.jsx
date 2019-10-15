import React from 'react';
import ArticleElement from './ArticleElement';
import ArticleDataLoader from './ArticleDataLoader';
import { Link } from 'react-router-dom';

const Article = () => {
    const [articleTitle, articleBody, loading] = ArticleDataLoader();
    return loading ? 'Loading' : (
        <>
            <h1>{articleTitle}</h1>
            {articleBody.map((articleElement, key) => <ArticleElement type={articleElement.type} model={articleElement.model} key={key} />)}
            <Link to='/'>Next article</Link> 
        </>
    ); 
};   

export default Article;

import React from 'react';
import ArticleElement from './ArticleElement';

const Article = ({ articleTitle, articleBody, loading }) => {
    return loading ? <div className="status-message">Loading...</div> : (
        <>
            <article>
                <h1>{articleTitle}</h1>
                {articleBody.map((articleElement, key) => <ArticleElement type={articleElement.type} model={articleElement.model} key={key} />)}
            </article>
        </>
    ); 
};   

export default Article;

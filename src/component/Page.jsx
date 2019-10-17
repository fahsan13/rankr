import React from 'react';
import Article from './Article';
import NavigationBar from './NavigationBar';

const Page = ({ articleTitle, articleBody, loading, error, allArticlesRead, handler }) => {
    return error ? <div className="status-message">Sorry, we've encountered an error. Please reload the page and try again.</div> : (
        <>
            <Article articleTitle={articleTitle} articleBody={articleBody} loading={loading} />
            <NavigationBar allArticlesRead={allArticlesRead} handler={handler} loading={loading} />
        </>
    );
};

export default Page;
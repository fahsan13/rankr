import React from 'react';
import Article from './Article';
import Header from './Header';
import NavigationBar from '../component/NavigationBar';

const Page = ({ articleTitle, articleBody, loading, error, allArticlesRead, handler }) => {
    if (error) {
        return <div className="status-message">Sorry, we've encountered an error. Please reload the page and try again.</div>
    }
    return loading ? <div className="status-message">Loading...</div> : (
        <>
            <Header />
            <Article articleTitle={articleTitle} articleBody={articleBody}/>
            <NavigationBar allArticlesRead={allArticlesRead} handler={handler} loading={loading} />
        </>
    );
};

export default Page;

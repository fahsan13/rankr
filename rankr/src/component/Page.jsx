import React from 'react';
import Article from './Article';
import NavigationBar from './NavigationBar';

const Page = ({ articleTitle, articleBody, loading, allArticlesRead, handler }) => {
    return (
        <>
            <Article articleTitle={articleTitle} articleBody={articleBody} loading={loading}/>
            <NavigationBar allArticlesRead={allArticlesRead} handler={handler} loading={loading}/>
        </>
    ); 
}; 

export default Page;
import React from 'react'

const NavigationBar = ({ allArticlesRead, handler, loading }) => {
    if (allArticlesRead) {
        return `You've read all available articles.`;
    }
    return loading ? null : <button onClick={handler()}>Next Article</button> 
};

export default NavigationBar;

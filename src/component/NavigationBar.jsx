import React from 'react'
import RankingForm from './RankingForm'

const NavigationBar = ({ allArticlesRead, handler, loading }) => {
    if (allArticlesRead) {
        return <>
                <RankingForm />
               </>
    }
    return loading ? null : 
        <div className="next-article-button-container">
            <button className="button" onClick={handler()}>Next Article</button> 
        </div>
};

export default NavigationBar;

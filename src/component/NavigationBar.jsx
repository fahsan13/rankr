import React from 'react'
import RankingForm from './RankingForm'

const NavigationBar = ({ allArticlesRead, handler, loading }) => {
    if (allArticlesRead) {
        return <>
                <RankingForm />
               </>
    }
    return loading ? null : <button onClick={handler()}>Next Article</button> 
};

export default NavigationBar;

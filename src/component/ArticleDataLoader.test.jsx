import React from 'react';
import { mount, configure } from 'enzyme';
import ArticleDataLoader from './ArticleDataLoader';
import { act } from "react-dom/test-utils";
import Adapter from 'enzyme-adapter-react-16';

let articleDataLoader, wrapper, articleDataLoaderInstance = null;

configure({ adapter: new Adapter() });

beforeEach(() => {
  articleDataLoader = new ArticleDataLoader();
  wrapper = mount(<ArticleDataLoader />);
  articleDataLoaderInstance = wrapper.instance();
});

afterEach(() => {
  articleDataLoader = null;
  wrapper = null;
  articleDataLoader = null;
});

describe('ArticleDataLoader', () => {
    it('should be initialised with default state', () => {
        expect(articleDataLoader.state).toStrictEqual({ 
            "allArticlesRead": false, 
            "articleBody": null, 
            "articleTitle": null, 
            "articles": [1, 2, 3, 4, 5], 
            "loading": true, 
            "error": null 
        });
    });   

    it('should select a random article from articles array when data is being loaded', () => {
        const randomArticleIndex = articleDataLoader.getRandomArticleIndex();

        expect(randomArticleIndex).toBeGreaterThanOrEqual(1);
        expect(randomArticleIndex).toBeLessThanOrEqual(5);
    });

    it('should retrieve a single article on component mount', () => {
        jest.spyOn(articleDataLoaderInstance, 'retrieveArticleData');

        act(() => {
            articleDataLoaderInstance.componentDidMount();
        });

        expect(articleDataLoaderInstance.retrieveArticleData).toHaveBeenCalledTimes(1);
    });

    it('should make a request to fetch article data when retrieveArticleData is called', async () => {
        jest.spyOn(global, 'fetch');

        act(() => {
            articleDataLoaderInstance.retrieveArticleData();
        });
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    it('should return false when checking if all articles have been read and articles array is not empty', () => {
        articleDataLoader.checkIfAllArticlesRead();

        expect(articleDataLoader.state.allArticlesRead).toBe(false);
    });

    it('should return true when checking if all articles have been read and articles array is empty', () => {
        act(() => {
            articleDataLoaderInstance.state.articles = [];
            articleDataLoaderInstance.checkIfAllArticlesRead();
        });

        expect(articleDataLoaderInstance.state.allArticlesRead).toBe(true);
    });
});

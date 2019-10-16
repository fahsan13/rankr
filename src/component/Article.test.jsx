// import React from 'react';
// import ArticleElement from './ArticleElement';

// const Article = ({ articleTitle, articleBody, loading }) => {
//     return loading ? 'Loading' : (
//         <>
//             <h1>{articleTitle}</h1>
//             {articleBody.map((articleElement, key) => <ArticleElement type={articleElement.type} model={articleElement.model} key={key} />)}
//         </>
//     ); 
// };   

// export default Article;

import React from 'react';
import {render, unmountComponentAtNode } from 'react-dom';
import Article from './Article';
import { act } from "react-dom/test-utils";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Article', () => {
    it('should indicate if an article is loading', () => {
        act(() => {
            render(<Article articleTitle={null} articleBody={null} loading={true}/>, container);
        });
        expect(container.innerHTML).toBe('Loading...');
    });

    it('should correctly render provided article data if data is not loading', () => {
        const title = 'Test Article Title';
        const body = [{
            'type': 'paragraph',
            'model': {
                'text': 'Test Article Paragraph'
            }
        }];
        act(() => {
            render(<Article articleTitle={title} articleBody={body} loading={false}/>, container);
        });
        expect(container.innerHTML).toBe(`<article><h1>Test Article Title</h1><p>Test Article Paragraph</p></article>`);
    });
});
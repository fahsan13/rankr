import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import NavigationBar from '../component/NavigationBar';
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

describe('NavigationBar', () => {
    it('should render a button to retrieve the next article when there are remaining articles and data is not loading', () => {
        act(() => {
            render(<NavigationBar allArticlesRead={false} handler={() => {}} loading={false}/>, container);
        });
        expect(container.innerHTML).toBe(`<div class="next-article-button-container"><button class="button">Next Article</button></div>`);
    });

    it('should render an empty string when there are remaining articles but data is loading', () => {
        act(() => {
            render(<NavigationBar allArticlesRead={false} handler={() => {}} loading={true}/>, container);
        });
        expect(container.innerHTML).toBe('');
    });

    it('should return a form for ranking articles when user has read all articles and data is not loading', () => {
        act(() => {
            render(<NavigationBar allArticlesRead={true} handler={() => {}} loading={false}/>, container);
        });
        expect(container.innerHTML).toContain(`<div class="ranking-form">`);
    });
});
import React from 'react';
import {render, unmountComponentAtNode } from 'react-dom';
import NavigationBar from './NavigationBar';
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
        expect(container.innerHTML).toBe('<button>Next Article</button>');
    });

    it('should render an empty string when there are remaining articles but data is loading', () => {
        act(() => {
            render(<NavigationBar allArticlesRead={false} handler={() => {}} loading={true}/>, container);
        });
        expect(container.innerHTML).toBe('');
    });

    it('should indicate that there are no articles remaining when user has read all articles and data is not loading', () => {
        act(() => {
            render(<NavigationBar allArticlesRead={true} handler={() => {}} loading={false}/>, container);
        });
        expect(container.innerHTML).toBe(`You've read all available articles.`);
    });
});
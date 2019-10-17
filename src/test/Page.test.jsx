// These are integration tests that exercise how Article and NavigationBar components are rendered on Page

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Page from '../component/Page';
import { act } from "react-dom/test-utils";

let container = null;
const testArticleTitle = 'Test Title';
const testArticleBody = [{
    'type': 'paragraph',
    'model': {
        'text': 'Test Article Paragraph'
    }
}];

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe('Page', () => {
    it('should correctly render an article and next article button when data is not loading', () => {
        act(() => {
            render(
                <Page articleTitle={testArticleTitle} articleBody={testArticleBody} loading={false} error={false} allArticlesRead={false} handler={() => { }} />,
                container
            );
        });
        expect(container.innerHTML).toContain(`<article><h1>Test Title</h1><p>Test Article Paragraph</p></article><div class="next-article-button-container">`);
    });

    it('should indicate that data is loading and not display an article when data is loading', () => {
        act(() => {
            render(
                <Page articleTitle={testArticleTitle} articleBody={testArticleBody} loading={true} error={false} allArticlesRead={false} handler={() => { }} />,
                container
            );
        });
        expect(container.innerHTML).toContain('Loading...');
        expect(container.innerHTML).not.toContain('<article>');
    });

    it('should indicate that an error has occured when an error has been passed through via ArticleDataLoader', () => {
        act(() => {
            render(
                <Page articleTitle={testArticleTitle} articleBody={testArticleBody} loading={false} error={true} allArticlesRead={false} handler={() => { }} />,
                container);
        });
        expect(container.innerHTML).toContain(`Sorry, we've encountered an error. Please reload the page and try again.`);
    });

    it('should correctly render final article and display the ranking form div when data is not loading and all articles have been read', () => {
        act(() => {
            render(<Page articleTitle={testArticleTitle} articleBody={testArticleBody} loading={false}
                error={false} allArticlesRead={true} handler={() => { }} />, container);
        });
        expect(container.innerHTML).toContain(`<article><h1>Test Title</h1><p>Test Article Paragraph</p></article><div class="ranking-form">`);
    });
});


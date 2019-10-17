import React from 'react';
import {render, unmountComponentAtNode } from 'react-dom';
import Article from '../component/Article';
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
    it('should correctly render provided article data with appropriate HTML tags', () => {
        const title = 'Test Article Title';
        const body = [{
            'type': 'paragraph',
            'model': {
                'text': 'Test Article Paragraph'
            }
        }];
        act(() => {
            render(<Article articleTitle={title} articleBody={body}/>, container);
        });
        expect(container.innerHTML).toBe(`<article><h1>Test Article Title</h1><p>Test Article Paragraph</p></article>`);
    });
});
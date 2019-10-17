import React from 'react';
import {render, unmountComponentAtNode } from 'react-dom';
import ArticleElement from '../component/ArticleElement';
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

describe('ArticleElement', () => {
    it('should render heading correctly using <h2> tag with provided text', () => {
        act(() => {
            render(<ArticleElement type={ 'heading' } model={ {text: 'test heading'} }/>, container);
        });
        expect(container.innerHTML).toBe('<h3>test heading</h3>');
    });

    it('should render paragraph correctly using <p> tag with provided text', () => {
        act(() => {
            render(<ArticleElement type={ 'paragraph' } model={ {text: 'test paragraph'} }/>, container);
        });
        expect(container.innerHTML).toBe('<p>test paragraph</p>');
    });

    it('should render image correctly using <img> tag with provided image model attributes', () => {
        const testModel = {
            url: 'rankr.com',
            altText: 'expected alt text',
            width: 360,
            height: 420
        };
        act(() => {
            render(<ArticleElement type={ 'image' } model={testModel}/>, container);
        });
        expect(container.innerHTML).toBe(`<img class="article-image" src="rankr.com" alt="expected alt text" width="360" height="420">`);
    });

    it('should render ordered list correctly using <ol> tag with provided items', () => {
        const testModel = {
            type: 'ordered',
            items: [
                'item 1',
                'item 99'
            ]
        };
        act(() => {
            render(<ArticleElement type={ 'list' } model={testModel}/>, container);
        });
        expect(container.innerHTML).toBe(`<ol><li>item 1</li><li>item 99</li></ol>`);
    });

    it('should render unordered list correctly using <ul> tag with provided items', () => {
        const testModel = {
            type: 'unordered',
            items: [
                'item 1',
                'item 99'
            ]
        };
        act(() => {
            render(<ArticleElement type={ 'list' } model={testModel}/>, container);
        });
        expect(container.innerHTML).toBe(`<ul><li>item 1</li><li>item 99</li></ul>`);
    });
});

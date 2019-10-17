
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Header from '../component/Header';
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

describe('Header', () => {
    it('should render the application name using the appropriate header HTML tag', () => {
        act(() => {
            render( <Header />, container);
        });
        expect(container.innerHTML).toBe('<header>Rankr</header>');
    });
});

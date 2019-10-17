import React from 'react';
import { mount, configure } from 'enzyme';
import RankingForm from '../component/RankingForm';
import Adapter from 'enzyme-adapter-react-16';

let alert, wrapper, rankingFormInstance = null;

configure({ adapter: new Adapter() });

beforeEach(() => {
    wrapper = mount(<RankingForm />);
    rankingFormInstance = wrapper.instance();
    alert = window.alert;
    window.alert = () => {};
});

afterEach(() => {
    window.alert = alert;
    wrapper = null;
    rankingFormInstance = null;
});

describe('RankingForm', () => {
    it('should be initialised with default state', () => {
        const rankingForm = new RankingForm();

        expect(rankingForm.state).toStrictEqual({
            "enteredText": "",
            "isRankingSubmitted": false,
            "submittedRanking": null,
        });
    });

    it('should validate a ranking on form submission', function () {
        const input = wrapper.find('input').at(0);

        jest.spyOn(rankingFormInstance, 'validate');
        jest.spyOn(window, 'alert');
        input.simulate('submit');

        expect(rankingFormInstance.validate).toHaveBeenCalledTimes(1);
    });

    it('should update internal state as user enters text in form', function () {
        const input = wrapper.find('input').at(0);

        jest.spyOn(rankingFormInstance, 'validate');
        jest.spyOn(window, 'alert');
        input.instance().value = 'hello';
        input.simulate('change');

        expect(rankingFormInstance.state.enteredText).toBe('hello');
    });

    it('should return a validation error when validating ranking that has fewer than 5 elements', () => {
        const { error } = rankingFormInstance.validate('1, 2, 3, 4,');

        expect(error).toBe(`Please ensure you've ranked all articles in the expected format, e.g. 5, 4, 2, 3, 1`);
    });

    it('should return a validation error when validating ranking that has greater than 5 elements', () => {
        const { error } = rankingFormInstance.validate('1, 2, 3, 4, 5, 6');

        expect(error).toBe(`Please ensure you've ranked all articles in the expected format, e.g. 5, 4, 2, 3, 1`);
    });

    it('should return a validation error when validating ranking that contains non-numerical values', () => {
        const { error } = rankingFormInstance.validate('1, 2, 3, 4, x');

        expect(error).toBe(`Please ensure you've ranked all articles in the expected format, e.g. 5, 4, 2, 3, 1`);
    });

    it('should return a validation error when validating ranking that contains duplicate values', () => {
        const { error } = rankingFormInstance.validate('1, 2, 3, 5, 5');

        expect(error).toBe('Please ensure that each article is ranked only once.');
    });

    it('should return no error when validating a valid ranking', () => {
        const { error } = rankingFormInstance.validate('1, 2, 3, 4, 5');
        
        expect(error).toBeNull();
    });
});

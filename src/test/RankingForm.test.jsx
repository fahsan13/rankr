import React from 'react';
import { mount, configure } from 'enzyme';
import RankingForm from '../component/RankingForm';
import Adapter from 'enzyme-adapter-react-16';

let rankingForm = null;
let alert = null;

configure({ adapter: new Adapter() });

beforeEach(() => {
    rankingForm = new RankingForm();
    alert = window.alert;
    window.alert = () => {};
});

afterEach(() => {
    rankingForm = null;
    window.alert = alert;
});

describe('RankingForm', () => {
    it('should be initialised with default state', () => {
        expect(rankingForm.state).toStrictEqual({
            "enteredText": "",
            "isRankingSubmitted": false,
            "submittedRanking": null,
        });
    });

    it('should validate a ranking on form submission', function () {
        const wrapper = mount(<RankingForm />);
        const rankingFormInstance = wrapper.instance();
        const input = wrapper.find('input').at(0);

        jest.spyOn(rankingFormInstance, 'validate');
        jest.spyOn(window, 'alert');
        input.simulate('submit');

        expect(rankingFormInstance.validate).toHaveBeenCalledTimes(1);
    });

    it('should update internal state as user enters text in form', function () {
        const wrapper = mount(<RankingForm />);
        const rankingFormInstance = wrapper.instance();
        const input = wrapper.find('input').at(0);

        jest.spyOn(rankingFormInstance, 'validate');
        jest.spyOn(window, 'alert');
        input.instance().value = 'hello';
        input.simulate('change');

        expect(rankingFormInstance.state.enteredText).toBe('hello');
    });

    it('should return a validation error when validating ranking that has fewer than 5 elements', () => {
        const wrapper = mount(<RankingForm />);
        const rankingFormInstance = wrapper.instance();

        let { error } = rankingFormInstance.validate('1, 2, 3, 4,');

        expect(error).toBe(`Please ensure you've ranked all articles in the expected format, e.g. 5, 4, 2, 3, 1`);
    });

    it('should return a validation error when validating ranking that has greater than 5 elements', () => {
        const wrapper = mount(<RankingForm />);
        const rankingFormInstance = wrapper.instance();

        let { error } = rankingFormInstance.validate('1, 2, 3, 4, 5, 6');

        expect(error).toBe(`Please ensure you've ranked all articles in the expected format, e.g. 5, 4, 2, 3, 1`);
    });

    it('should return a validation error when validating ranking that contains non-numerical values', () => {
        const wrapper = mount(<RankingForm />);
        const rankingFormInstance = wrapper.instance();

        let { error } = rankingFormInstance.validate('1, 2, 3, 4, x');

        expect(error).toBe(`Please ensure you've ranked all articles in the expected format, e.g. 5, 4, 2, 3, 1`);
    });

    it('should return a validation error when validating ranking that contains duplicate values', () => {
        const wrapper = mount(<RankingForm />);
        const rankingFormInstance = wrapper.instance();

        let { error } = rankingFormInstance.validate('1, 2, 3, 5, 5');

        expect(error).toBe('Please ensure that each article is ranked only once.');
    });

    it('should return no error when validating a valid ranking', () => {
        const wrapper = mount(<RankingForm />);
        const rankingFormInstance = wrapper.instance();

        let { error } = rankingFormInstance.validate('1, 2, 3, 4, 5');

        expect(error).toBeNull();
    });
});

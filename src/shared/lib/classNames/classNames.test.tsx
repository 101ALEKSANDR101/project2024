import { describe, test, expect } from '@jest/globals';
import { classNames } from './classNames';

describe('classNames', () => {
	test('only first param', () => {
		const expected = 'cls'
		expect(classNames('cls')).toBe(expected);
	});

	test('additional', () => {
		const expected = 'cls cls1 cls2';
		expect(classNames('cls', {}, ['cls1', 'cls2'])).toBe(expected);
	});

	test('mods additional', () => {
		const expected = 'cls cls1 cls2 hovered scrollable';
		expect(classNames('cls', { hovered: true, scrollable: true }, ['cls1', 'cls2'])).toBe(expected);
	});

	test('mods false additional', () => {
		const expected = 'cls cls1 cls2 hovered';
		expect(classNames('cls', { hovered: true, scrollable: false }, ['cls1', 'cls2'])).toBe(expected);
	});

	test('mods false additional undefined null', () => {
		const expected = 'cls cls1 scrollable';
		expect(classNames('cls', { hovered: false, scrollable: true }, ['cls1', undefined, null])).toBe(expected);
	});
});
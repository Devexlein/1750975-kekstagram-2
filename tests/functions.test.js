import { describe, it, expect } from 'vitest';
import { isStringLengthValid, isPalindrome, extractNumber } from '../js/functions';

describe('Does the isStringLengthValid function check for a valid maximum length', () => {
  it('A string of multiple characters, with a length parameter greater than the number of characters', () => {
    expect(isStringLengthValid('проверяемая строка', 20)).toBe(true);
  });
  it('A string of multiple characters, with a length parameter equal to the number of characters', () => {
    expect(isStringLengthValid('проверяемая строка', 18)).toBe(true);
  });
  it('A string of several characters, with a length parameter that is less than the number of characters', () => {
    expect(isStringLengthValid('проверяемая строка', 10)).toBe(false);
  });
  it('An empty string is received', () => {
    expect(isStringLengthValid('')).toBe(false);
  });
});

describe('Does the isPalindrome function check if a string is a palindrome', () => {
  it('A string of several characters is a palindrome', () => {
    expect(isPalindrome('топот')).toBe(true);
  });
  it('A string of several words is a palindrome', () => {
    expect(isPalindrome('Лёша на полке клопа нашёл')).toBe(true);
  });
  it('A string of several words is a palindrome, and spaces at the beginning of the string are ignored', () => {
    expect(isPalindrome('  Лёша на полке клопа нашёл')).toBe(true);
  });
  it('A string of multiple characters in different cases is a palindrome', () => {
    expect(isPalindrome('ДовОд')).toBe(true);
  });
  it('A string of several words is not a palindrome', () => {
    expect(isPalindrome('Это не палиндром')).toBe(false);
  });
});

describe('Does the extractNumber function extract numbers from a string and return them as a positive integer', () => {
  it('Received a string with numbers', () => {
    expect(extractNumber('2023 год')).toBe(2023);
  });
  it('A string with numbers and spaces at the beginning is received', () => {
    expect(extractNumber(' ECMAScript 2022')).toBe(2022);
  });
  it('A string with fractional numbers is obtained', () => {
    expect(extractNumber('1 кефир, 0.5 батона')).toBe(105);
  });
  it('A string with leading zeros before the number is received', () => {
    expect(extractNumber('агент 007')).toBe(7);
  });
  it('Received a string without numbers', () => {
    expect(extractNumber('а я томат')).toBeNaN();
  });
  it('An empty string is received', () => {
    expect(extractNumber('')).toBeNaN();
  });
  it('A string containing only spaces was received', () => {
    expect(extractNumber('  ')).toBeNaN();
  });
  it('The number is received as an argument', () => {
    expect(extractNumber(2023)).toBe(2023);
  });
  it('Zero is received as an argument', () => {
    expect(extractNumber(0)).toBe(0);
  });
  it('A negative number is received as an argument', () => {
    expect(extractNumber(-1)).toBe(1);
  });
  it('A fractional number is received as an argument', () => {
    expect(extractNumber(1.5)).toBe(15);
  });
  it('A negative fractional number is taken as an argument', () => {
    expect(extractNumber(-10.5)).toBe(105);
  });
});

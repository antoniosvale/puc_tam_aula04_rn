import { IsPalindrome } from "./palindrome";

test("testIsPalindrome_EmptyString", () => {
  const result = IsPalindrome("");
  expect(result).toBe(true);
});

test("testIsPalindrome_SingleCharacterPalindrome", () => {
  const result = IsPalindrome("a");
  expect(result).toBe(true);
});

test("testIsPalindrome_PalindromeString", () => {
  const result = IsPalindrome("radar");
  expect(result).toBe(true);
});

test("testIsPalindrome_NonPalindromeString", () => {
  const result = IsPalindrome("hello");
  expect(result).toBe(false);
});

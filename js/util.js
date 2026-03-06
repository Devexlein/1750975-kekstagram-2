/**
 * Генератор ID
 * @param {number} [start = 1] - Начальное значение счетчика.
 * @returns {() => number} - Функция-счетчик увеличивает значение на 1 при каждом вызове.
*/
export const createIdGenerator = (start = 1) => {
  let lastGenerateId = start;
  return () => lastGenerateId++;
};

/**
 * Возвращает случайное число в заданом диапазоне положительных чисел (включительно).
 * @param {number} min - Минимальное значение в диапазоне (включительно).
 * @param {number} max - Максимальное значение в диапазоне (включительно).
 * @returns {number} - Случайное число в заданом диапазоне.
*/
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

/**
 * Возвращает случайный элемент из переданного массива.
 * Использует функцию getRandomInt для генерации случайного индекса в диапазоне [0, length-1].
 * @template A
 * @param {A[]} elements - Массив элементов, из которых выбирается случайный элемент.
 * @returns {A} - Случайный элемент массива elements.
*/
export const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

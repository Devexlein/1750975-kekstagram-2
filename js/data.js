import {createIdGenerator, getRandomInt, getRandomArrayElement} from './util.js';
import {NAMES, DESCRIPTIONS, MESSAGES, INITIAL_NUMBER_AVATAR, FINAL_NUMBER_AVATAR, MIN_LIKES, MAX_LIKES, MIN_COMMENTS, MAX_COMMENTS, SIMILAR_PICTURE_COUNT} from './constants.js';

/**
 * @typedef {Object} Comment
 * @property {number} id - Уникальный идентификатор комментария, сгенерированный функцией generateCommentId().
 * @property {string} avatar - Путь к изображению аватара в формате photos/NN.jpg, где NN - случайное число от INITIAL_NUMBER_AVATAR до FINAL_NUMBER_AVATAR.
 * @property {string} message - Текст комментария, выбранный случайно из массива MESSAGES.
 * @property {string} name - Имя автора комментария, выбранное случайно из массива NAMES.
 */
/**
 * @typedef {Object} PictureDescription
 * @property {number} id - Уникальный идентификатор описания, сгенерированный функцией generatePictureId().
 * @property {string} url - URL пути к изображению в формате photos/NN.jpg, где NN соответствует id.
 * @property {string} description - Описание фотографии, выбранное случайно из массива DESCRIPTIONS.
 * @property {number} likes - Количество лайков, случайное число от MIN_LIKES до MAX_LIKES включительно.
 * @property {Comment[]} comments - Вложенный массив комментариев к фотографии. Типизирован выше как массив объектов Comment.
 */

export const generatePictureId = createIdGenerator(1);
export const generateCommentId = createIdGenerator(1);

/**
 * Создает новый комментарий со случайными данными.
 * @returns {Comment} Объект комментария.
 */
export const createComment = () => ({
  id: generateCommentId(),
  avatar: `photos/${getRandomInt(INITIAL_NUMBER_AVATAR, FINAL_NUMBER_AVATAR)}.jpg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

/**
 * Генерирует описание фотографии, опубликованной пользователем.
 * @returns {PictureDescription} Объект описания изображения.
 */
export const generatePictureDescription = () => {
  const pictureId = generatePictureId();
  return {id: pictureId,
    url: `photos/${pictureId}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInt(MIN_LIKES, MAX_LIKES),
    comments: Array.from({length: getRandomInt(MIN_COMMENTS, MAX_COMMENTS)}, createComment)
  };
};

/**
 * Массив объектов описания фотографий.
 * Создается с помощью Array.from, где:
 * - длина массива равна константе SIMILAR_PICTURE_COUNT
 * - каждый элемент генерируется функцией generatePictureDescription()
 * @type {PictureDescription[]} - типизирован выше как массив объектов PictureDescription.
 * @constant - Неизменяемая константа.
 */
export const similarPictures = () => Array.from({length: SIMILAR_PICTURE_COUNT}, generatePictureDescription);

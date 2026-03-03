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

export const NAMES = [
  'Liam', 'Yuki', 'Amara', 'Mateo', 'Ahmed', 'Svetlana', 'Hans', 'Diego', 'Ingrid', 'Fatima', 'Zahra',
  'Santiago', 'Mei', 'Nikolai', 'Siobhan'
];

export const DESCRIPTIONS = [
  'Деловой портрет. Мужчина в строгом костюме у панорамного окна офиса на 25 этаже, на фоне — закатный город.',
  'Весенняя невеста. Девушка в белом платье в цветущем саду среди лепестков яблони и сакуры.',
  'Стиль лофт. Девушка в кожаной куртке на старом диване в интерьере с кирпичными стенами и индустриальными деталями.',
  'Лето в поле. Девушка в цветочном платье среди подсолнухов в контровом свете заходящего солнца.',
  'Неоновый мегаполис. Портрет женщины под дождем, лицо которой освещено розово-синей неоновой вывеской.',
  'Романтика в саду: Мечтательная девушка на скамейке сб укетом тюльпанов в золотистых лучах солнца.',
  'Динамичный «случайный» кадр человека, спешащего по парковке с пакетами покупок.',
  'Старик с глубокими морщинами в национальной одежде на фоне горного хребта.',
  'Детство. Ребенок, пускающий мыльные пузыри на ярко-зеленой лужайке в парке.',
  'Спорт. Атлет в момент прыжка, запечатленный с низкой точки на фоне чистого неба.',
  'Туманное утро. Одинокое дерево в густом тумане над зеркальной гладью лесного озера.',
  'Заснеженная избушка в лесу с горящим светом в окне под звездным небом.',
  'Бирюзовая волна в момент «трубы» на фоне белоснежного пляжа с пальмами.',
  'Осень в горах: Ярко-рыжие лиственницы на склоне, покрытом первым тонким слоем снега.',
  'Капля росы на кончике травинки, в которой отражается весь луг',
  'Узкая улочка азиатского квартала с обилием иероглифов, вывесок и мокрым асфальтом.',
  'Белоснежное современное здание с четкими геометрическими тенями на фоне синего неба.',
  'Старый город. Узкая мощеная улица Европы с цветущими балконами и припаркованным винтажным велосипедом.',
  'Огромный подвесной мост, уходящий в облака над заливом.',
  'Длинная выдержка, превращающая огни машин в красно-желтые световые линии.',
  'Уют. Чашка кофе с пенкой-артом, лежащая книга и теплый плед у камина.',
  'Натюрморт. Разбитая ваза с рассыпавшимися фруктами на темном дубовом столе.',
  'Игра света и тени на гофрированной металлической поверхности.',
  'Кулинария: Процесс посыпания мукой свежего теста в луче яркого света.',
  'Технологии: Макросъемка микросхемы с футуристичной подсветкой дорожек.'
];

export const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

export const INITIAL_NUMBER_AVATAR = 1;
export const FINAL_NUMBER_AVATAR = 6;
export const MIN_LIKES = 15;
export const MAX_LIKES = 200;
export const MIN_COMMENTS = 0;
export const MAX_COMMENTS = 30;
export const SIMILAR_PICTURE_COUNT = 25;

/**
 * Генератор ID
 * @param {number} [start = 1] - Начальное значение счетчика.
 * @returns {() => number} - Функция-счетчик увеличивает значение на 1 при каждом вызове.
*/
export const createIdGenerator = (start = 1) => {
  let lastGenerateId = start;
  return () => lastGenerateId++;
};

export const generatePictureId = createIdGenerator(1);
export const generateCommentId = createIdGenerator(1);

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
export const similarPicture = Array.from({length: SIMILAR_PICTURE_COUNT}, generatePictureDescription);

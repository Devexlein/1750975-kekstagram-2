import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { createComment, generatePictureDescription } from '../js/main';

describe('createComment', () => {
  // Выполняется перед каждым тестом автоматически
  beforeEach(() => {
    // GIVEN: Фиксируем Math.random для воспроизводимых результатов
    vi.spyOn(Math, 'random').mockReturnValue(0.5); // всегда возвращает 0.5
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should creates a valid Comment object', () => {
    // GIVEN: Подготовка начального состояния
    // - Math.random зафиксирован на 0.5
    // - Все константы (INITIAL_NUMBER_AVATAR = 1, NAMES, MESSAGES) доступны
    const expectedAvatarNum = 4; // getRandomInt(1, 6) при random = 0.5

    // WHEN: Выполняется действие - вызов функции
    const comment = createComment();

    // THEN: Проверяю результат
    expect(comment).toEqual({
      id: expect.any(Number),
      avatar: `photos/${expectedAvatarNum}.jpg`,
      message: expect.any(String),
      name: expect.any(String)
    });
  });

  it('should the avatar property has the correct format', () => {
    // GIVEN: - getRandomInt(INITIAL_NUMBER_AVATAR, FINAL_NUMBER_AVATAR) вернет 4

    // WHEN: Создаю комментарий
    const comment = createComment();

    // THEN: Проверяю формат свойства avatar
    expect(comment.avatar).toMatch(/^photos\/\d+\.jpg$/);
    expect(comment.avatar).toContain('photos/');
    expect(comment.avatar).toMatch(/\.jpg$/);
  });

  it('should returns an object with all required properties', () => {
    // GIVEN: Функция createComment и зафиксированный random

    // WHEN: Создаю комментарий
    const comment = createComment();

    // THEN: Проверяю наличие свойств
    expect(comment).toHaveProperty('id');
    expect(comment).toHaveProperty('avatar');
    expect(comment).toHaveProperty('message');
    expect(comment).toHaveProperty('name');
    expect(Object.keys(comment)).toHaveLength(4);
  });

  it('should all properties have the correct data types', () => {
    // GIVEN: Подготовка тестового окружения

    // WHEN: Создаю комментарий
    const comment = createComment();

    // THEN: Проверяю типы
    expect(typeof comment.id).toBe('number');
    expect(typeof comment.avatar).toBe('string');
    expect(typeof comment.message).toBe('string');
    expect(typeof comment.name).toBe('string');
  });

  it('should creates unique objects with multiple calls', () => {
    // GIVEN: Функция готова к множественным вызовам

    // WHEN: Создаю 3 комментария
    const comments = Array.from({ length: 3 }, createComment);

    // THEN: Проверяю, что получен массив из 3 уникальных объектов
    expect(comments).toHaveLength(3);
    expect(comments[0]).not.toBe(comments[1]);
    expect(comments[1]).not.toBe(comments[2]);
    expect(comments[0]).not.toBe(comments[2]);

    comments.forEach((comment) => {
      expect(comment).toEqual(expect.objectContaining({
        id: expect.any(Number),
        avatar: expect.stringMatching(/^photos\/\d+\.jpg$/),
        message: expect.any(String),
        name: expect.any(String)
      }));
    });
  });
});

describe('generatePictureDescription', () => {
  beforeEach(() => {
    // GIVEN: Фиксируем Math.random для воспроизводимых результатов
    vi.spyOn(Math, 'random')
    // Последовательность для всех вызовов getRandomInt/getRandomArrayElement
      .mockReturnValueOnce(0.5) // первый вызов
      .mockReturnValueOnce(0.4) // второй вызов
      .mockReturnValueOnce(0.3) // третий вызов
      .mockReturnValue(0.5); // все остальные вызовы
  });

  it('should creates a valid PictureDescription object', () => {
    // GIVEN: Функция с зафиксированными случайными значениями
    // - generatePictureId() → '1'
    // - getRandomArrayElement(DESCRIPTIONS) → 'Красивое фото'
    // - getRandomInt(MIN_LIKES = 15, MAX_LIKES = 200) → 77
    // - getRandomInt(MIN_COMMENTS = 0, MAX_COMMENTS = 30) → 9 комментария

    // WHEN: Выполняется действие - вызов функции
    const picture = generatePictureDescription();

    // THEN: Проверяю результат
    expect(picture).toEqual({
      id: expect.any(Number),
      url: expect.stringMatching(/^photos\/\d+\.jpg$/),
      description: expect.any(String),
      likes: expect.any(Number),
      comments: expect.arrayContaining([
        expect.objectContaining({ id: expect.any(Number), avatar: expect.any(String) }),
        expect.objectContaining({ id: expect.any(Number), avatar: expect.any(String) })
      ])
    });
  });

  it('should the URL property has the correct format photos/ID.jpg', () => {
    // GIVEN: generatePictureId возвращает предсказуемый ID

    // WHEN: Создаю описание изображения
    const picture = generatePictureDescription();

    // THEN: Проверяю формат свойства URL
    expect(picture.url).toMatch(/^photos\/\d+\.jpg$/);
    expect(picture.url).toContain('photos/');
    expect(picture.url).toMatch(/\.jpg$/);
  });

  it('should comments contains an array of Comment objects of the correct length', () => {
    // GIVEN: getRandomInt(MIN_COMMENTS = 0, MAX_COMMENTS = 30) → 9

    // WHEN: Создаю описание изображения
    const picture = generatePictureDescription();

    // THEN: Проверяю массив комментариев
    expect(Array.isArray(picture.comments)).toBe(true);
    expect(picture.comments).toHaveLength(9);

    picture.comments.forEach((comment) => {
      expect(comment).toHaveProperty('id', expect.any(Number));
      expect(comment).toHaveProperty('avatar', expect.stringMatching(/^photos\/\d+\.jpg$/));
      expect(comment).toHaveProperty('message', expect.any(String));
      expect(comment).toHaveProperty('name', expect.any(String));
    });
  });

  it('should likes is within the valid range of MIN_LIKES..MAX_LIKES', () => {
    // GIVEN: getRandomInt(MIN_LIKES = 15, MAX_LIKES = 200) → 77

    // WHEN: Создаю описание изображения
    const picture = generatePictureDescription();

    // THEN: Проверяю диапазон лайков
    expect(picture.likes).toBeGreaterThanOrEqual(15);
    expect(picture.likes).toBeLessThanOrEqual(200);
    expect(typeof picture.likes).toBe('number');
  });

  it('should returns an object with all required properties', () => {
    // GIVEN: Функция generatePictureDescription

    // WHEN: Создаю описание изображения
    const picture = generatePictureDescription();

    // THEN: Проверяю наличие свойств
    expect(picture).toHaveProperty('id');
    expect(picture).toHaveProperty('url');
    expect(picture).toHaveProperty('description');
    expect(picture).toHaveProperty('likes');
    expect(picture).toHaveProperty('comments');
    expect(Object.keys(picture)).toHaveLength(5);
  });

  it('should creates unique objects with multiple calls', () => {
    // GIVEN: Функция готова к множественным вызовам

    // WHEN: Создаю 3 описания изображений
    const pictures = Array.from({ length: 3 }, generatePictureDescription);

    // THEN: Проверяю, что получен массив из 3 уникальных объектов
    expect(pictures).toHaveLength(3);
    expect(pictures[0]).not.toBe(pictures[1]);
    expect(pictures[1]).not.toBe(pictures[2]);
    expect(pictures[0]).not.toBe(pictures[2]);
  });
});

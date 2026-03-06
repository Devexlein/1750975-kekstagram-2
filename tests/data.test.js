import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { createComment, generatePictureDescription } from '../js/data';

describe('Does the createComment function create an array object whose values are a list of comments', () => {
  // Выполняется перед каждым тестом автоматически
  beforeEach(() => {
    // GIVEN: Фиксируем Math.random для воспроизводимых результатов
    vi.spyOn(Math, 'random').mockReturnValue(0.5); // всегда возвращает 0.5
  });

  afterEach(() => {
    vi.restoreAllMocks();
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
});

describe('Does the generatePictureDescription function generate an array object whose values are descriptions of the photos posted by the user', () => {
  beforeEach(() => {
    // GIVEN: Фиксируем Math.random для воспроизводимых результатов
    vi.spyOn(Math, 'random')
    // Последовательность для всех вызовов getRandomInt/getRandomArrayElement
      .mockReturnValueOnce(0.5) // первый вызов
      .mockReturnValueOnce(0.4) // второй вызов
      .mockReturnValueOnce(0.3) // третий вызов
      .mockReturnValue(0.5); // все остальные вызовы
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
});

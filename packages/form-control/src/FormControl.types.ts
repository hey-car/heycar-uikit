import { HTMLAttributes, ReactNode } from 'react';

export type FormControlProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * Растягивает компонент на ширину контейнера
   */
  block?: boolean;

  /**
   * Заблокированное состояние
   */
  disabled?: boolean;

  /**
   * Заполненное состояние
   */
  filled?: boolean;

  /**
   * Выбранное (фокус) состояние
   */
  focused?: boolean;

  /**
   * Отображение ошибки
   */
  error?: ReactNode | boolean;

  /**
   * Текст подсказки
   */
  hint?: ReactNode;

  /**
   * Лейбл компонента
   */
  label?: ReactNode;

  /**
   * Слот слева
   */
  leftAddons?: ReactNode;

  /**
   * Слот справа
   */
  rightAddons?: ReactNode;

  /**
   * Слот под полем
   */
  bottomAddons?: ReactNode;

  /**
   * Дополнительный класс
   */
  className?: string;

  /**
   * Дополнительный класс для поля
   */
  fieldClassName?: string;

  /**
   * Идентификатор для систем автоматизированного тестирования
   */
  dataTestId?: string;

  /**
   * Компонент поля (инпут, textarea и пр.)
   */
  children?: ReactNode;
};

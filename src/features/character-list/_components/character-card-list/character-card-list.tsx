import Image from 'next/image';
import { ReactNode, useCallback } from 'react';
import { Character, CharacterCardListProps } from '../../character-list.types';
import styles from './character-card-list.module.scss';

const CharacterCardList = ({ list }: CharacterCardListProps): ReactNode => {
  const renderCard = useCallback((item: Character) => {
    return (
      <a
        className={styles['character-card-list__card']}
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image
          className={styles['character-card-list__card__image']}
          src={item.image}
          alt={item.id.toString()}
          priority
          width={150}
          height={150}
        />
        <h2 className={styles['character-card-list__card__title']}>
          {item.name}
        </h2>
        <p className={styles['character-card-list__card__description']}>
          {item.label}
        </p>
      </a>
    );
  }, []);
  return (
    <div>
      <div className={styles['character-card-list__grid']}>
        {list.map((item) => {
          return renderCard(item);
        })}
      </div>
    </div>
  );
};

export default CharacterCardList;

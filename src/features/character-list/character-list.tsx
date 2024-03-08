import { ReactNode, useEffect, useMemo } from 'react';
import CharacterCardList from './_components/character-card-list/character-card-list';
import CharacterSelect from './_components/character-select/character-select';
import { useCharacterList } from './character-list.hook';
import styles from './character-list.module.scss';

const CharacterList = (): ReactNode => {
  const state = useCharacterList();
  const { onSearch } = state;

  const renderTitle = useMemo(
    () => <h1 className={styles['character-list__title']}>Character List</h1>,
    []
  );

  console.log(state.options);
  useEffect(() => {
    onSearch('');
  }, [onSearch]);

  return (
    <div>
      {renderTitle}
      <CharacterSelect {...state} />
      <CharacterCardList list={state.selectedOptions} />
    </div>
  );
};

export default CharacterList;

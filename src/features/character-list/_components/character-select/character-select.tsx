import { ReactNode, memo } from 'react';
import ReactSelect, { MultiValue } from 'react-select';
import { Character, CharacterSelectProps } from '../../character-list.types';
import CustomOption from '../custom-option/custom-option';

const CharacterSelect = ({
  loading,
  options,
  selectedOptions,
  paginationInfo,
  searchValue,
  error,
  setSearchValue,
  onChangeValue,
  onSearch,
  fetchNextPage,
}: CharacterSelectProps): ReactNode => {
  return (
    <ReactSelect
      isMulti
      isSearchable
      isClearable={false}
      key={'character-list'}
      id={'character-list'}
      name={'character-list'}
      instanceId={'character-list'}
      placeholder='Type to search...'
      loadingMessage={() => 'Loading...'}
      aria-activedescendant={'character-list'}
      noOptionsMessage={() => error}
      className='react-select-container'
      classNamePrefix='react-select'
      isLoading={loading}
      closeMenuOnSelect={false}
      blurInputOnSelect={false}
      value={selectedOptions}
      options={options}
      getOptionLabel={(option: Character) => option.name}
      getOptionValue={(option: Character) => option.id.toString()}
      hideSelectedOptions={false}
      components={{ Option: CustomOption }}
      onInputChange={(newValue, { action }) => {
        if (action !== 'set-value') {
          onSearch(newValue);
          setSearchValue(newValue);
          return newValue;
        }
        return searchValue;
      }}
      onChange={(selectedOptions: MultiValue<Character>) => {
        onChangeValue(selectedOptions);
      }}
      onMenuScrollToBottom={() => {
        if (paginationInfo.next) {
          fetchNextPage();
        }
      }}
    />
  );
};

export default memo(CharacterSelect);

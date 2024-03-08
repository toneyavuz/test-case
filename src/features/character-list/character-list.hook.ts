import { useCallback, useState } from 'react';
import { MultiValue } from 'react-select';
import { fetchCharacterList } from './character-list.fetch';
import { mapCharacterList } from './character-list.helper';
import {
  Character,
  CharacterListError,
  CharacterListHook,
  CharacterListInfo,
  CharacterListResponse,
} from './character-list.types';

const useCharacterList = (): CharacterListHook => {
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState<Character[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [error, setError] = useState<string>('');
  
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<Character>>(
    []
  );
  const [paginationInfo, setPaginationInfo] = useState<CharacterListInfo>(
    {} as CharacterListInfo
  );

  const onChangeValue = useCallback(
    async (selectedOptions: MultiValue<Character>) => {
      setSelectedOptions(selectedOptions);
    },
    []
  );

  const fetchNextPage = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchCharacterList({
        url: paginationInfo.next,
      });

      if (data.results) {
        setLoading(false);
        setOptions(options.concat(mapCharacterList(data.results)));
        setPaginationInfo(data.info);
      } else {
        setError((data as unknown as CharacterListError).error);
      }
    } catch {
      setLoading(false);
    }
  }, [options, paginationInfo]);

  const onSearch = useCallback(async (query: string) => {
    setLoading(true);
    setOptions([]);
    setPaginationInfo({} as CharacterListInfo);

    try {
      const params = query ? { name: query } : undefined;
      const data = await fetchCharacterList({
        params,
      });
      setLoading(false);
      if (data?.results) {
        const list = mapCharacterList(data.results);
        setOptions(list);
        setPaginationInfo(data.info);
        return list;
      } else {
        setError((data as unknown as CharacterListError).error);
      }
      return [];
    } catch {
      setLoading(false);
      return [];
    }
  }, []);

  return {
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
  };
};

export { useCharacterList };

import { CHARACTER_LIST_URL } from './character-list.constant';
import {
  CharacterListError,
  CharacterListResponse,
  FetchCharacterListParams,
} from './character-list.types';

const fetchCharacterList = async ({
  url = CHARACTER_LIST_URL,
  params,
}: FetchCharacterListParams): Promise<CharacterListResponse> => {
  const urlWithParams = params ? `${url}?${new URLSearchParams(params)}` : url;
  const response = await fetch(urlWithParams, {
    method: 'GET',
  });
  const data = (await response.json()) as CharacterListResponse;
  return data;
};

export { fetchCharacterList };

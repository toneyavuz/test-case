import { GroupBase, MultiValue, OptionProps } from 'react-select';

export type CharacterListHook = {
  loading: boolean;
  options: Character[];
  selectedOptions: MultiValue<Character>;
  paginationInfo: CharacterListInfo;
  searchValue: string;
  error: string;
  setSearchValue: (value: string) => void;
  fetchNextPage: () => Promise<void>;
  onChangeValue: (selectedOptions: MultiValue<Character>) => Promise<void>;
  onSearch: (query: string) => Promise<Character[]>;
};

export type FetchCharacterListParams = {
  url?: string;
  params?: Partial<FetchCharacterListQueryParams>;
};
export type FetchCharacterListQueryParams = {
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
};

export type CharacterListResponse = {
  info: CharacterListInfo;
  results: Character[];
};

export type CharacterListError = {
  error: string;
};

export type CharacterListInfo = {
  count: number;
  pages: number;
  next: string;
  prev: null;
};

export type Character = {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;

  // for select
  value: string;
  label: string;
};

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Genderless = 'Genderless',
  Unknown = 'Unknown',
}

export type Location = {
  name: string;
  url: string;
};

export enum Species {
  Alien = 'Alien',
  Cronenberg = 'Cronenberg',
  Human = 'Human',
  Humanoid = 'Humanoid',
}

export enum Status {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}

export type CustomOptionProps = OptionProps<
  Character,
  true,
  GroupBase<Character>
>;

export type CharacterSelectProps = {
  loading: boolean;
  options: Character[];
  selectedOptions: MultiValue<Character>;
  paginationInfo: CharacterListInfo;
  searchValue: string;
  error: string;
  setSearchValue: (value: string) => void;
  fetchNextPage: () => Promise<void>;
  onChangeValue: (selectedOptions: MultiValue<Character>) => Promise<void>;
  onSearch: (query: string) => Promise<Character[]>;
};

export type CharacterCardListProps = {
  list: MultiValue<Character>;
};

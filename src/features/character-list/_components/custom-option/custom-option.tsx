import Image from 'next/image';
import { memo } from 'react';
import { components } from 'react-select';
import { CustomOptionProps } from '../../character-list.types';
import { highlightTerm } from './custom-option.helper';
import styles from './custom-option.module.scss';

const CustomOption = (props: CustomOptionProps) => {
  const { innerProps, data, isSelected, selectProps } = props;
  const inputValue = selectProps?.inputValue;

  const name = inputValue ? highlightTerm(data.name, inputValue) : data.name;
  return (
    <components.Option {...props}>
      <div {...innerProps} className={styles['custom-option']}>
        <input
          type='checkbox'
          checked={isSelected}
          className={styles['custom-option__check']}
        />
        <Image
          className={styles['custom-option__image']}
          src={data.image}
          alt={data.id.toString()}
          width={40}
          height={40}
          priority
        />
        <div>
          <div className={styles['custom-option__title']}>{name}</div>
          <div className={styles['custom-option__episode']}>
            {data.episode.length} Episodes
          </div>
        </div>
      </div>
    </components.Option>
  );
};

export default memo(CustomOption);

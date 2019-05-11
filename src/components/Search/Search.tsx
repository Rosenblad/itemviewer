import React, { useEffect, useState, useRef } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Fuse from 'fuse.js';
import { Option } from '../../containers/SearchContainer/types';

export interface SearchProps {
  items: Option[];
  onChange(ids: string[]): void;
}

interface FuseOptions {
  keys: string[];
  threshold: number;
}

export default function Search({ items, onChange }: SearchProps): JSX.Element {
  // const [query, setQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState();
  const fuse = useRef<{}>();

  useEffect((): void => {
    const options: FuseOptions = {
      keys: ['title', 'subtitle'],
      threshold: 0.1,
    };

    if (items === undefined) return;

    fuse.current = new Fuse(items, options);
  }, [fuse, items]);

  // const handleChange = e => {
  //   const { value } = e.target;
  //   setQuery({ query: value });

  //   if (fuse) {
  //     const searchResult = fuse.search(value);
  //     const ids = searchResult.map(v => v.id);

  //     if (onChange) {
  //       onChange({ ids });
  //     }
  //   }
  // };

  const handleSelect = (selected: any): void => {
    // console.log('handleSelect', selectedOption);
    setSelectedOption(selected);
  };

  function handleSubmit(): void {
    // console.log('handleSubmit');
  }

  const value = selectedOption && selectedOption.value;

  return (
    <form onSubmit={handleSubmit}>
      <Select
        name="search"
        value={value}
        arrowRenderer={null}
        onChange={handleSelect}
        options={items}
        openOnClick={false}
        placeholder="Search..."
      />
    </form>
  );
}

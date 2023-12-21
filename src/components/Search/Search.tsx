import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';

import styles from './Search.module.scss';
import { useRef } from 'react';
import { Button } from 'components/Button';

interface SearchProps { 
  hasError: boolean,
  onSubmit: (text: string) => void;
}

export const Search = ({ hasError, onSubmit}: SearchProps) => {
  const serachRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const text = serachRef.current?.value || '';

    if (text) {
      onSubmit(text);
      if (serachRef.current) {
        serachRef.current.value = '';
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <div className={styles.search}>
    <label htmlFor='search' className={styles.label}>
    <SearchIcon/>
    </label>
    <input 
    type="text"
    className={styles.textField}
    id='search'
    name="username"
    placeholder='Search Github user...'
    ref={serachRef}
     />
     { hasError && (
      <div className={styles.error}>
        No result
      </div>
     )}
     <Button>Search</Button>
      </div>
    </form>
  )
}
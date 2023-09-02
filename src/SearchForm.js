import { useGlobalContext } from './context';

const SearchForm = () => {
  const { query, setQuery, isError } = useGlobalContext();

  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault}>
      <h2>Search Movies</h2>
      <input
        type='text'
        className='form-input'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {isError.show && <div className='error'>{isError.msg}</div>}
    </form>
  );
};

export default SearchForm;

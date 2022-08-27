// import { PropTypes } from 'prop-types';
// import { Route, Routes, Link } from 'react-router-dom';
// import { matchPath, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
// import localStorage from '../services/localStorage';
// import '../styles/App.scss';
import getCharactersByHouseName from '../services/fetch';
import CharacterList from './CharacterList';
import Filters from './Filters';

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    getCharactersByHouseName().then((charactersApi) => {
      console.log(charactersApi);
      setCharacters(charactersApi);
    });
  }, []);
  console.log(characters);

  const handleSearch = (value) => {
    setSearchName(value);
  };

  return (
    <>
      <h1>Harry Potter Searcher</h1>
      <Filters
        characters={characters}
        searchName={searchName}
        handleSearch={handleSearch}
      />
      <section>
        <CharacterList characters={characters} searchName={searchName} />
      </section>
    </>
  );
}

export default App;

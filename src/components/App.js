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
  const [filterName, setFilterName] = useState('gryffindor');

  const handleInput = (value) => {
    setFilterName(value);
  };

  useEffect(() => {
    getCharactersByHouseName().then((charactersApi) => {
      console.log(charactersApi);
      setCharacters(charactersApi);
    });
  }, []);
  console.log(characters);

  return (
    <>
      <h1>Harry Potter Searcher</h1>
      <Filters characters={characters} handleInput={handleInput} />
      <CharacterList characters={characters} />
    </>
  );
}

export default App;

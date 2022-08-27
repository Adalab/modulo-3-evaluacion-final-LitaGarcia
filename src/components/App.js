// import { PropTypes } from 'prop-types';
// import { Route, Routes, Link } from 'react-router-dom';
// import { matchPath, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import ls from '../services/localStorage';
// import '../styles/App.scss';
import getCharacters from '../services/fetch';
import CharacterList from './CharacterList';
import Filters from './Filters';

function App() {
  const [characterData, setCharacterData] = useState(
    ls.get('characterData', [])
  );
  const [searchedName, setSearchedName] = useState('');
  const [selectedHouse, setselectedHouse] = useState('Gryffindor');

  const houses = characterData
    .filter((character) => character.house !== '')
    .map((character) => character.house);
  const housesSet = new Set(houses);
  const allHouses = [...housesSet];

  useEffect(() => {
    ls.set('characterData', characterData);
  }, [characterData]);

  useEffect(() => {
    //si estan en el ls los cojo de ahi, sino de la api
    getCharacters().then((charactersApi) => {
      setCharacterData(charactersApi);
    });
  }, []);

  const handleInputText = (value) => {
    setSearchedName(value);
  };
  const handleInputSelect = (value) => {
    setselectedHouse(value);
  };
  const cleanCharacters = characterData
    .filter((character) =>
      character.name.toLowerCase().includes(searchedName.toLowerCase())
    )
    .filter((character) => character.house === selectedHouse);

  return (
    <>
      <header>
        <h1>Harry Potter Searcher</h1>
      </header>
      <main>
        <Filters
          characterData={cleanCharacters}
          searchedName={searchedName}
          handleInputText={handleInputText}
          handleInputSelect={handleInputSelect}
          allHouses={allHouses}
        />
        <section>
          <CharacterList
            characterData={cleanCharacters}
            searchedName={searchedName}
          />
        </section>
      </main>
    </>
  );
}

export default App;

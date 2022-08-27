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

  useEffect(() => {
    ls.set('characterData', characterData);
  }, [characterData]);

  useEffect(() => {
    getCharacters().then((charactersApi) => {
      setCharacterData(charactersApi);
    });
  }, []);

  const handleInputText = (value) => {
    setSearchedName(value);
  };

  return (
    <>
      <header>
        <h1>Harry Potter Searcher</h1>
      </header>
      <main>
        <Filters
          characterData={characterData}
          searchedName={searchedName}
          handleInputText={handleInputText}
        />
        <section>
          <CharacterList
            characterData={characterData}
            searchedName={searchedName}
          />
        </section>
      </main>
    </>
  );
}

export default App;

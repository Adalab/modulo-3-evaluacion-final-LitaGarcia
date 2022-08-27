// import { PropTypes } from 'prop-types';
import { matchPath, Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ls from '../services/localStorage';
// import '../styles/App.scss';
import getCharacters from '../services/fetch';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';

function App() {
  const [characterData, setCharacterData] = useState([]);
  const [searchedName, setSearchedName] = useState('');
  const [selectedHouse, setselectedHouse] = useState('Gryffindor');

  console.log('se renderiza APP pero no el useEffect');
  useEffect(() => {
    //si estan en el ls los cojo de ahi, sino de la api
    getCharacters().then((charactersApi) => {
      setCharacterData(charactersApi);
    });
  }, []);

  const houses = characterData
    .filter((character) => character.house !== '')
    .map((character) => character.house);
  const housesSet = new Set(houses);
  const allHouses = [...housesSet];
  // useEffect(() => {
  //   ls.set('characterData', characterData);
  // }, [characterData]);

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

  const { pathname } = useLocation();
  const dataPath = matchPath('/character/:characterId', pathname);
  const characterId = dataPath !== null ? dataPath.params.characterId : null;
  const characterFound = characterData.find((character) => {
    return character.id === characterId;
  });

  return (
    <>
      <header>
        <h1>Harry Potter Searcher</h1>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Filters
                characters={cleanCharacters}
                searchedName={searchedName}
                handleInputText={handleInputText}
                handleInputSelect={handleInputSelect}
                allHouses={allHouses}
              />
              <section>
                <CharacterList
                  characters={cleanCharacters}
                  searchedName={searchedName}
                />
              </section>
            </main>
          }
        />
        <Route
          path="/character/:characterId"
          element={<CharacterDetail character={characterFound} />}
        />

        {/* <Route path="/character" element={<CharacterDetail />} /> */}
      </Routes>
    </>
  );
}

export default App;

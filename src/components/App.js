// import { PropTypes } from 'prop-types';
import { matchPath, Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ls from '../services/localStorage';
// import '../styles/App.scss';
import getCharacters from '../services/fetch';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import ResetButton from './ResetButton';
import NotFoundCharacter from './NotFoundCharacter';
import Loader from './Loader';

function App() {
  const [characterData, setCharacterData] = useState(
    ls.get('characterData', [])
  );
  const [searchedName, setSearchedName] = useState('');
  const [selectedHouse, setSelectedHouse] = useState('Gryffindor');
  const [selectedGender, setSelectedGender] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const houses = characterData
    .filter((character) => character.house !== '')
    .map((character) => character.house);
  const housesSet = new Set(houses);
  const allHouses = [...housesSet];

  useEffect(() => {
    setIsLoading(true);
    if (characterData.length === 0) {
      getCharacters().then((charactersApi) => {
        setCharacterData(charactersApi);
        setIsLoading(false);
      });
    }
  }, []);

  const handleInputText = (value) => {
    console.log(value);
    setSearchedName(value);
  };
  const handleInputSelect = (value) => {
    setSelectedHouse(value);
  };
  const handleInputRadio = (value) => {
    setSelectedGender(value);
  };

  const cleanedCharacters = characterData
    .filter((character) => {
      return character.name.toLowerCase().includes(searchedName.toLowerCase());
    })
    .filter((character) => character.house === selectedHouse)
    .filter((character) => {
      if (selectedGender === 'all') {
        return characterData;
      } else {
        return character.gender === selectedGender;
      }
    });

  const { pathname } = useLocation();
  const dataPath = matchPath('/character/:characterId', pathname);
  const characterId = dataPath !== null ? dataPath.params.characterId : null;
  const characterFound = characterData.find((character) => {
    return character.id === characterId;
  });

  const renderComponents = () => {
    if (isLoading) {
      return <Loader />;
    } else {
      if (cleanedCharacters.length === 0) {
        return <NotFoundCharacter />;
      } else {
        return (
          <CharacterList
            characters={cleanedCharacters}
            searchedName={searchedName}
          />
        );
      }
    }
  };

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
                characters={cleanedCharacters}
                searchedName={searchedName}
                handleInputText={handleInputText}
                handleInputSelect={handleInputSelect}
                allHouses={allHouses}
                selectedHouse={selectedHouse}
                handleInputRadio={handleInputRadio}
                selectedGender={selectedGender}
              />
              <ResetButton
                handleInputText={handleInputText}
                handleInputSelect={handleInputSelect}
                handleInputRadio={handleInputRadio}
              ></ResetButton>
              <section>{renderComponents()}</section>
            </main>
          }
        />
        <Route
          path="/character/:characterId"
          element={<CharacterDetail character={characterFound} />}
        />
      </Routes>
    </>
  );
}

export default App;

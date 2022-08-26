// import { PropTypes } from 'prop-types';
// import { Route, Routes, Link } from 'react-router-dom';
// import { matchPath, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
// import localStorage from '../services/localStorage';
// import '../styles/App.scss';
import get from '../services/fetch';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    get.getCharactersByHouseName().then((charactersApi) => {
      console.log(charactersApi);
      setCharacters(charactersApi);
    });
  }, []);

  return <></>;
}

export default App;

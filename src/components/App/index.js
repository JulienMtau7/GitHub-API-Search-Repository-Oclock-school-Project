/* eslint-disable jsx-a11y/control-has-associated-label */
// == Import npm
import React, { useState } from 'react';

// == Import
import './app.scss';

// == Import CSS Semantic UI
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react'

// == Import des composants locaux
import Header from 'src/components/Header';
import Message from 'src/components/Message';
import SearchBar from 'src/components/SearchBar';
import ReposResults from 'src/components/ReposResults';

// == Import de notre selecteur simplifyRepos
import { simplifyRepos } from 'src/utils';
import axios from 'axios';

// == Composant
const App = () => {
  const [search, setSearch] = useState('');

  const [query, SetQuery] = useState('');

  const [page, SetPage] = useState(1);

  const [repos, setRepos] = useState([]);

  const [count, setCount] = useState(null);

  const [messageContent, setMessageContent] = useState('Utilisez ce site pour chercher des repos sur github');

  const [isErrorMessage, setErrorMessage] = useState(false);

  const [showMessage, setShowMessage] = useState(true);

  const setMessage = (content, isError = false) => {
    setMessageContent(content);
    setErrorMessage(isError);
    setShowMessage(true);
  };

  const launchSearch = () => {
    axios.get('https://api.github.com/search/repositories', {
      params: {
        q: search,
        sort: 'stars',
        order: 'desc',
        page: 1,
        per_page: 9,
      },
    })
      .then((reponse) => {
        const { items, total_count: totalCount } = reponse.data;

        setRepos(simplifyRepos(items));

        setCount(totalCount);

        setMessage(`La recherche pour ${search} a donné ${totalCount} resultat${totalCount > 1 ? 's' : ' '}`);

        SetQuery(search);

        SetPage(1);
      })
      .catch(() => {
        setMessage('Un problème est survenu lors de la recherche...', true);
      })
      .finally();
  };

  const searchMore = () => {
    axios.get('https://api.github.com/search/repositories', {
      params: {
        q: query,
        sort: 'stars',
        order: 'desc',
        page: page + 1,
        per_page: 9,
      },
    })
      .then((reponse) => {
        const { items } = reponse.data;

        setRepos([...repos, ...simplifyRepos(items)]);

        SetPage(page + 1);
      })
      .catch(() => {
        setMessage('Un problème est survenu lors de la recherche...', true);
      })
      .finally();
  };

  return (
    <div className="app">
      <Header />
      <SearchBar
        manageSubmit={launchSearch}
        searchInputValue={search}
        setSearchInputValue={setSearch}
      />
      {showMessage
        && (
          <Message
            content={messageContent}
            isError={isErrorMessage}
            setShowMessage={setShowMessage}
          />
        )}
      <ReposResults repos={repos} />
      {count > repos.length && <Button onClick={searchMore} primary>Suivant</Button> }
    </div>
  );
};
// == Export
export default App;

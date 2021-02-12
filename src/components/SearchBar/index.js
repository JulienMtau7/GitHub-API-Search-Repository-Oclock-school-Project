import React from 'react';
import PropTypes from 'prop-types';

// Import des composant depuis semantic ui
import { Form, Input, Segment } from 'semantic-ui-react';

const SearchBar = ({ searchInputValue, setSearchInputValue, manageSubmit }) => (
  <Form onSubmit={(event) => {
    event.preventDefault();
    manageSubmit();
  }}
  >
    <Segment>
      <Input
        onChange={(event) => {
          setSearchInputValue(event.target.value);
        }}
        value={searchInputValue}
        fluid
        iconPosition="left"
        icon="search"
        placeholder="Saissisez votre recherche"
      />
    </Segment>

  </Form>
);

SearchBar.propTypes = {
  searchInputValue: PropTypes.string.isRequired,
  setSearchInputValue: PropTypes.func.isRequired,
  manageSubmit: PropTypes.func.isRequired,
};

export default SearchBar;

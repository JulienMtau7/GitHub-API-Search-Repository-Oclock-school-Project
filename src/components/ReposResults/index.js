import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

// Import du sous-composant
import RepoResult from './RepoResult';

import './repos-results.scss';

const ReposResults = ({ repos }) => (
  <Grid columns={3}>
    <Grid.Row>
      {
        repos.map((repo) => (
          <RepoResult key={repo.id} {...repo} />
        ))
      }
    </Grid.Row>
  </Grid>
);

ReposResults.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReposResults;

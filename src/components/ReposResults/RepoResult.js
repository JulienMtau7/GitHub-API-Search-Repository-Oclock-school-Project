import React from 'react';
import PropTypes from 'prop-types';

// Import des composant depuis semantic ui
import { Card, Grid } from 'semantic-ui-react';

const RepoResult = ({
  name,
  description,
  avatarUrl,
  url,
  login,
}) => (
  <Grid.Column style={{ marginBottom: '1em' }}>
    <Card
      image={avatarUrl}
      header={name}
      meta={login}
      description={description}
      href={url}
    />
  </Grid.Column>
);

RepoResult.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
};
export default RepoResult;

// eslint-disable-next-line import/prefer-default-export
export const simplifyRepos = (repos) => repos.map((repo) => (
  {
    id: repo.id,
    name: repo.name,
    login: repo.owner.login,
    avatarUrl: repo.owner.avatar_url,
    url: repo.html_url,
    description: repo.description,
  }
));

const loadState = () => {
  try {
    const serializedAccessToken = localStorage.getItem('accessToken');
    const serializedRefreshToken = localStorage.getItem('refreshToken');

    return {
      accessToken: serializedAccessToken && JSON.parse(serializedAccessToken),
      refreshToken: serializedRefreshToken && JSON.parse(serializedRefreshToken),
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);

    return {};
  }
};

const saveState = ({ accessToken, refreshToken }) => {
  try {
    const serializedAccessToken = JSON.stringify(accessToken);
    const serializedRefreshToken = JSON.stringify(refreshToken);

    localStorage.setItem('accessToken', serializedAccessToken);
    localStorage.setItem('refreshToken', serializedRefreshToken);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

export { loadState, saveState };

const loadState = () => {
  try {
    const serializedAccessToken = localStorage.getItem('accessToken');
    const serializedRefreshToken = localStorage.getItem('refreshToken');

    return (serializedAccessToken && serializedRefreshToken)
      ? {
        accessToken: JSON.parse(serializedAccessToken),
        refreshToken: JSON.parse(serializedRefreshToken),
      }
      : {};
  } catch (err) {
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
    console.error(error);
  }
};

export { loadState, saveState };

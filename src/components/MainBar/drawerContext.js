import React from 'react';

const DrawerContext = React.createContext({
  openDrawer: () => {},
  closeDrawer: () => {},
  drawerOpen: false,
});

export default DrawerContext;

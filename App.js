import React from 'react';
import { DrawerLayoutAndroid } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import MainView from './components/MainView';
import DrawerView from './components/DrawerView';

import reducers from './reducers';

const App = () => (
  <Provider store={createStore(reducers)} >
    <DrawerLayoutAndroid
      ref={(_drawer) => { this.drawer = _drawer; }}
      drawerWidth={250}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => <DrawerView />}
    >
      <MainView showDrawer={() => this.drawer.openDrawer()} />
    </DrawerLayoutAndroid>
  </Provider>
);

export default App;

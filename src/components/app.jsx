import React, { useState, useEffect } from 'react';

import {
  f7ready,
  App,
  View,
} from 'framework7-react';


import routes from '../js/routes';
import store from '../js/store';

const MyApp = () => {
  // Login screen demo data
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Framework7 Parameters
  const f7params = {
    name: 'sehatQ', // App name
      theme: 'auto', // Automatic theme detectio
      // App store
      store: store,
      // App routes
      routes: routes,
      // Register service worker
      serviceWorker: {
        path: '/service-worker.js',
      },
  };

  f7ready(() => {


    // Call F7 APIs here
  });

  return (
    <App { ...f7params } >
        {/* Your main view, should have "view-main" class */}
        <View main className="safe-areas" url="/" />
    </App>
  )
}
export default MyApp;
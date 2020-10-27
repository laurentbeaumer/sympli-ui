import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import NavigationBar from './components/NavigationBar';
import SettingsPage from './components/SettingsPage';
import './App.css';

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <MainPage />
  },
  {
    path: "/settings",
    exact: true,
    main: () => <SettingsPage />
  },
];

export default () =>
  <div className="App">
    <Router>
      <NavigationBar />
      {routes.map((route: {
        path: any;
        exact: any;
        main: any;
      },
        index: any) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
    </Router>
  </div>
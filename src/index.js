import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game';
import CardList from './CardList';
import MasterForm from './MasterForm';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <MasterForm />,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



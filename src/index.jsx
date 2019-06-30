import packageJSON from '../package.json'

import React from 'react';
import ReactDom from 'react-dom';
import {createStore, combineReducers} from 'redux';
// import {Provider} from 'react-redux';
import {hero} from './hero-reducer';
import {enemiesGrid} from './enemies-grid-reducer';
import {heroBullets} from './hero-bullets-reducer';
import {enemyExplosions} from './enemy-explosions-reducer';
import {controls} from './controls';
import {gameLoop} from './game-loop';
import {collisions} from './collisions';
import {update} from './actions';
import {Stage} from './stage.jsx';

console.log (`${packageJSON.name} ${packageJSON.version} (${process.env.REACT_APP_ENV})`);

const spaceInvaders = combineReducers({
  enemiesGrid,
  enemyExplosions,
  hero,
  heroBullets,
});

const store = createStore(spaceInvaders)

const render = () => ReactDom.render(
  <Stage state={store.getState()} />
, document.getElementById('stage')
)

gameLoop(elapsedTime => {
  store.dispatch(update(elapsedTime))
  render()
  collisions(store)
})

controls(store)
render()


# Rex Invaders

![Space Invaders](https://firebasestorage.googleapis.com/v0/b/rex-invaders.appspot.com/o/220px-Space_Invaders_flyer%2C_1978.jpg?alt=media&token=39260e12-ee75-4f71-aac5-05b7b7beaf34)

> Rexlabs Branded Space Invaders made with React and stuff  
Forked from [grancalavera/react-spaceinvaders](https://github.com/grancalavera/react-spaceinvaders)

## Ready Player One?

To start playing...

```bash
cd <working-direcetory>
git clone https://github.com/listingslab/rex-invaders.git
cd rex-invaders
yarn
yarn less
yarn start
```
Navigate to [Port 8080](http://localhost:8080)

## grancalavera's notes

- expect library to make simple tests
- deep-freeze
- spread operator
- slice to generate new arrays with changes on specific indices
- Object.assign to update objects
- a reducer must return the current state for any unknown action
- in the example the store is passed to the component in the view :|
- move sets the hero to move, but does not render
- probably it would be much easier to put all the sprites in a single array
- and then just pass them down to the view layer
- https://github.com/matthew-andrews/isomorphic-fetch
- http://redux.js.org/docs/advanced/ExampleRedditAPI.html
- move all actions to a separate file
- instead of dirty:
  - stale
  - expired
  - old
  - world changed
  - .. :(
- remember ({foo, bar, ...props})
- replace all usages of actions by action functions first
- move game loop into a middleware
- test ui using shallow rendering
- https://facebook.github.io/react/docs/test-utils.html
- css in js npm install radium
- http://projects.formidablelabs.com/radium/
- sufficiently local css is indistinguishable from inline styles
- jed schmidt brooklynjs
- https://www.youtube.com/watch?v=XjK03if9o7s
- http://tachyons.io
- http://jxnblk.com/gravitons
- https://github.com/chantastic/minions.css/tree/master
- move id generation to action creators, see https://github.com/gaearon/redux-devtools#gotchas

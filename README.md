# vocabulary trainer

I am trying to learn korean with [Duolingo](https://www.duolingo.com/).  
When trying to learn words, some stick better than others. So I want to specifically practice just the words I have trouble remembering.  
To my knowledge, Duolingo doesn't allow practicing a custom set of words (I may be wrong about this).  
So I made a tiny app to help with that. Also to practice [React](https://reactjs.org/).

## Seeing it in Action

### Github Pages (https://sashn.github.io/vocabulary-trainer)

Based on a project that helps with deploying React apps to Github Pages: https://github.com/gitname/react-gh-pages  
Obviously with Github Pages, one can only run frontend code. Hence there is no Persistence.

### Heroku (https://sashn-vocabulary-trainer.herokuapp.com)

[Heroku](https://www.heroku.com/) seems awesome!

## What it does

- there are just two screens, **list** and **practice** (navigation top right), which allow to do the following things:
- **list** allows to maintain a list of words (using the usual CRUD operations). can also toggle words as active/inactive.
- **practice** allows to pratice all *active* words

## Running it locally

- Download the code
- Node, npm needs to be installed
- In the project folder, run `npm run mystart` (see package.json for what that does)

## Tech used

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [React](https://reactjs.org/)
- [JSON Server](https://github.com/typicode/json-server)
- [React Router](https://reactrouter.com/)

### Issues / (possible) ToDo

- json-server has an issue where it crashes upon multiple consecutive requests (happens with AddWords functionality)
- multiple language support
- easy switch for practice *direction*: EN <-> KR / KR <-> EN
- automatic conversion from romanized (i.e. "cha") to hangul (i.e. "차")







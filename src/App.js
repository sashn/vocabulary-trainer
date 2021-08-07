import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from './components/Header';
import Practice from './components/Practice';
import List from './components/List';

function App() {
  const [words, setWords] = useState([]);

  const serverUrl = 'http://localhost:5000/words/';

  useEffect(() => {
    const getWordsFromDb = async () => {
      const wordsFromDb = await fetchWords();
      setWords(wordsFromDb);
    }
    getWordsFromDb();
  }, []);

  const fetchWords = async () => {
    const res = await fetch(serverUrl);
    const data = await res.json();
    return data;
  }

  const addWord = async (word) => {
    const res = await fetch(serverUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(word)
    });

    const data = await res.json();

    setWords([...words, data]);
  }

  const toggleActive = async (id) => {
    const wordToUpdate = words.filter((word) => word.id === id)[0];
    const updatedWord = { ...wordToUpdate, active: !wordToUpdate.active };
    editWord(updatedWord);
  }

  const editWord = async (updatedWord) => {
    const res = await fetch(`${serverUrl}${updatedWord.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedWord)
    });

    const data = await res.json();

    setWords(words.map((word) => word.id === updatedWord.id ? data : word ));
  }

  const deleteWord = async (id) => {
    const res = await fetch(`${serverUrl}${id}`, { method: 'DELETE' });
    setWords(words.filter((word) => word.id !== id ));
  }

  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/list" />
      </Route>
      <Header />
      <Switch>
        <Route path="/list">
          <List 
            words={ words } 
            addWord={ addWord } 
            editWord={ editWord } 
            toggleActive={ toggleActive } 
            deleteWord={ deleteWord }
          />
        </Route>
        <Route path="/practice">
          <Practice words={ words } />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

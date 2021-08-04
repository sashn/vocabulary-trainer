import { useState, useEffect } from 'react'
import Header from './components/Header'
import List from './components/List'

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

  const editWord = async (word) => {
  }

  return (
    <>
      <Header />
      <List words={ words } addWord={ addWord } editWord={ editWord } />
    </>
  );
}

export default App;



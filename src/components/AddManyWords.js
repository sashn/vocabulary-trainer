import { useState } from 'react';

const AddManyWords = ({ addManyWords }) => {
  const [wordsLines, setWordsLines] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const words = [];

    wordsLines.split('\n').map((wordLine) => {
      const [hangulAndRomanized, english] = wordLine.split(' - ');
      const [hangul, romanized,] = hangulAndRomanized.split(/\ \(|\)/);

      if (hangul && english && romanized) {
        words.push({
          hangul: hangul,
          english: english,
          romanized: romanized,
          active: true
        });
      }
    });

    addManyWords(words);
  }

  return (
    <div className="container my-5">
      <form onSubmit={ onSubmit }>

        <textarea 
          className="form-control fs-4" 
          value={ wordsLines } 
          placeholder={ "Paste lines of words in format:\n안녕하세요 (annyeonghaseyo) - hello" } 
          style={{ height: "150px" }}
          onChange={ (e) => setWordsLines(e.target.value) } 
        />

        <div className="text-center">
          <input type="submit" value="Add Words" className="btn btn-primary my-3" style={{ width: "150px" }} />
        </div>

      </form>
    </div>
  )
}

export default AddManyWords

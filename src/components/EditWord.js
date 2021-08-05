import { useState } from 'react'
import PropTypes from 'prop-types';

const emptyWord = {
  id: '',
  hangul: '',
  romanized: '',
  english: '',
  active: true
};

const EditWord = ({ wordIn, submitHandler }) => {
  const [word, setWord] = useState(wordIn);

  const setHangul = (e) => { setWord({...word, hangul: e.target.value }); }
  const setRomanized = (e) => { setWord({...word, romanized: e.target.value }); }
  const setEnglish = (e) => { setWord({...word, english: e.target.value }); }
  const setActive = (e) => { setWord({...word, active: !word.active }); }

  const onSubmit = (e) => {
    e.preventDefault();

    submitHandler(word);

    setWord(emptyWord);
  }
  
  return (
    <form action="" className="row faux-tr" onSubmit={ onSubmit }>
      <div className="col faux-td"><input type="text" value={ word.hangul } onChange={ setHangul } /></div>
      <div className="col faux-td"><input type="text" value={ word.romanized } onChange={ setRomanized } /></div>
      <div className="col faux-td"><input type="text" value={ word.english } onChange={ setEnglish } /></div>
      <div className="col faux-td">
        <input type="checkbox" checked={ word.active } className="form-check-input" onChange={ setActive } />
      </div>
      <div className="col-4 faux-td">
        { word.id && <input type="hidden" value={ word.id } /> }
        <input type="submit" value="Save Word" className="btn btn-primary" />
      </div>
    </form>
  )
}

EditWord.defaultProps = {
  wordIn: emptyWord
}

export default EditWord


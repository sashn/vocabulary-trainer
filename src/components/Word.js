import { useState } from 'react'
import EditWord from './EditWord'

const Word = ({ word, activeClickHandler, editWord, deleteClickHandler  }) => {
  const [editMode, setEditMode] = useState(false);

  const saveWord = (word) => {
    editWord(word);
    setEditMode(false);
  }

  return (
    ( editMode ?
      <EditWord wordIn={ word } submitHandler={ saveWord } />
    :
      <div className="row faux-tr">
        <div className="col faux-td">{ word.hangul }</div>
        <div className="col faux-td">{ word.romanized }</div>
        <div className="col faux-td">{ word.english }</div>
        <div className="col faux-td">
          <i 
            className="bi-eye-fill fs-3" 
            style={{ color: (word.active ? "green" : "red") }} 
            onClick={ () => activeClickHandler(word.id) }
            role="button"
          />
        </div>
        <div className="col faux-td">
          <i 
            className="bi-pencil-square fs-3"
            onClick={ () => setEditMode(true) }
            role="button"
          />
        </div>
        <div className="col faux-td">
          <i 
            className="bi-trash fs-3"
            onClick={ () => deleteClickHandler(word.id) }
            role="button"
          />
        </div>
      </div>
    )
  )
}

export default Word

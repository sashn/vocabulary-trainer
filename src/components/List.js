import Word from './Word'
import EditWord from './EditWord'

const List = ({ words, addWord, editWord, toggleActive, deleteWord }) => {
  return (
    <div className="container my-3">
      <div className="table">
        <div className="faux-thead fw-bold">
          <div className="row faux-tr">
            <div className="col faux-th">hangul</div>
            <div className="col faux-th">romanized</div>
            <div className="col faux-th">english</div>
            <div className="col faux-th">active</div>
            <div className="col faux-th">edit</div>
            <div className="col faux-th">delete</div>
          </div>
        </div>
        <div className="faux-tbody">
          {words.map(word => <Word 
            key={word.id} 
            word={ word } 
            activeClickHandler={ toggleActive } 
            editWord={ editWord } 
            deleteClickHandler={ deleteWord } 
          />)}
          <EditWord submitHandler={ addWord } />
        </div>
      </div>
    </div>
  )
}

export default List

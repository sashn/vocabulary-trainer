import Word from './Word'
import EditWord from './EditWord'

const List = ({ words, addWord, editWord }) => {
  return (
    <div className="container my-3">
      <div className="table">
        <div className="faux-thead fw-bold">
          <div className="row faux-tr">
            <div className="col faux-th">hangul</div>
            <div className="col faux-th">romanized</div>
            <div className="col faux-th">english</div>
            <div className="col faux-th">active</div>
            <div className="col faux-th">delete</div>
            <div className="col faux-th">edit</div>
          </div>
        </div>
        <div className="faux-tbody">
          {words.map(word => <Word key={word.id} word={ word } />)}
          <EditWord addWord={ addWord } />
        </div>
      </div>
    </div>
  )
}

export default List

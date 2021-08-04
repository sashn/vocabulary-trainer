const Word = ({ word }) => {
  return (
    <div className="row faux-tr">
      <div className="col faux-td">{ word.hangul }</div>
      <div className="col faux-td">{ word.romanized }</div>
      <div className="col faux-td">{ word.english }</div>
      <div className="col faux-td">
        <a href="#">
          { word.active ?
            <i className="bi-eye" style={{ color: "green" }}></i>
          :  
            <i className="bi-eye" style={{ color: "red" }}></i>
          }
        </a>
      </div>
      <div className="col faux-td"><i className="bi-pencil-square" /></div>
      <div className="col faux-td"><i className="bi-trash" /></div>
    </div>
  )
}

export default Word

import PracticeForm from './PracticeForm'

const Practice = ({ words }) => {

  return (

    <div className="container">
      <div className="practice-form-container">
        <PracticeForm words={ words } />
      </div>
    </div>

  )
}

export default Practice

import PracticeForm from './PracticeForm'

const Practice = ({ words }) => {

  return (

    <div className="container">
      <div style={{ padding: '100px 300px' }}>
        <PracticeForm words={ words } />
      </div>
    </div>

  )
}

export default Practice

import { useState, useEffect, useRef } from 'react';

const PracticeForm = ({ words }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [guess, setGuess] = useState('');
  const [isGuessCorrect, setIsGuessCorrect] = useState(false);
  const buttonNextTask = useRef(null);
  const inputText = useRef(null);

  const checkGuess = (e) => {
    e.preventDefault();

    setIsSubmitted(true);
    setIsGuessCorrect(guess.toLowerCase() === answer.toLowerCase());
  }

  const nextTask = () => {
    const activeWords = words.filter((word) => word.active);
    const word = activeWords[Math.floor(Math.random() * activeWords.length)];

    if (typeof word !== 'undefined') {
      setQuestion(word.english);
      setAnswer(word.hangul);
    }
    setIsSubmitted(false);
    setGuess('');
    setIsGuessCorrect(false);
  }

  useEffect(() => {
    nextTask();
  }, [words]);

  useEffect(() => {
    if (isSubmitted) {
      buttonNextTask.current.focus();
    } else {
      inputText.current.focus();
    }
  }, [isSubmitted]);

  return (

    <form onSubmit={ checkGuess }>
      <p className="fs-1 p-3">{ question }</p>
      { isSubmitted ?
        <>
          <fieldset disabled="disabled">
            <input 
              type="text" 
              className="form-control fs-4" 
              value={ guess } 
              style={{ height: "150px", paddingBottom: "110px" }}
              readOnly
            />
          </fieldset>
          <div className="text-center">
            <button className="btn btn-secondary my-3" ref={ buttonNextTask } style={{ width: "150px" }} onClick={ nextTask }>Next Word</button>
          </div>
          { isGuessCorrect ?
            <p className="fs-4 p-3" style={{ backgroundColor: "PaleGreen" }}>Right!</p>
          :
            <p className="fs-4 p-3" style={{ backgroundColor: "Salmon" }}>Wrong! Right Answer: { answer }</p>
          }
        </>
      :
        <>
          <input 
            type="text" 
            className="form-control fs-4" 
            placeholder="Type in Translation" 
            value={ guess } 
            onChange={ (e) => setGuess(e.target.value) } 
            style={{ height: "150px", paddingBottom: "110px" }}
            ref={ inputText }
          />
          <div className="text-center">
            <input type="submit" value="Check" className="btn btn-primary my-3" style={{ width: "150px" }} />
          </div>
        </>
      }
    </form>

  )
}

export default PracticeForm;

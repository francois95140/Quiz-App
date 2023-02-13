import React,{useContext} from 'react';
import {QuizContext} from "../Helpers/Contexts";
import {Question} from "../Helpers/QuestionBank";

function Endscreen() {

    const {score, setScore,setGameState} = useContext(QuizContext);

    const restart = () => {
        setScore(0);
        setGameState("menu")
    }

    return (
        <div className="EndScreen">
            <h1>Quiz Finished</h1>
            <h3>{score}/{Question.length}</h3>
            <button onClick={restart}>Restart Quiz</button>
        </div>
    );
}

export default Endscreen;
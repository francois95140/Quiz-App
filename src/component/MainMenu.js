import React, {useContext} from "react";
import {QuizContext} from "../Helpers/Contexts";
import "../App.css"
import {getData} from "../Helpers/QuestionBank";

export default function MainMenu(){
    const {gameState, setGameState} = useContext(QuizContext);
    return (
        <div className="Menu">
            <button onClick={()=>{setGameState("quiz")}} >Start Quiz</button>
        </div>
    )
}
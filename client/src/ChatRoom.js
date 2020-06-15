import React, { useEffect, useContext } from 'react';
import './chatRoom.css';
import { InterviewContext } from './context/InterviewContext';

export default (props) => {

    const { selectedCandidates } = useContext(InterviewContext);
    const candidate = selectedCandidates[0];
    console.log('candidate : ', candidate);
    return (
        <div className="chatRoom">
            <div className="retour"
            onClick={()=>props.history.push('/')}>Retour</div>
            <h1>{`Interview - ${candidate.prenom} ${candidate.nom}`}</h1>
            <div className="chatRoomOptions">

                <div className="chatTools">
                    <div className="option">Chat Vidéo</div>
                    <div className="option">Living Code</div>
                </div>

                <div className="chatWindow"></div>
              
            </div>
        </div>
    )
}
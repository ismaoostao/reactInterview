import React , {useContext} from 'react';
import {InterviewContext} from './context/InterviewContext';
import './CandidatsList.css';

export default () => {

    const {userCandidates} = useContext(InterviewContext);

    return (
     <div className="candidatsList">
       <ul>
         {userCandidates.map(c=><li key={c.nom}>{c.prenom}</li>)}
       </ul>
      </div>
    );
}




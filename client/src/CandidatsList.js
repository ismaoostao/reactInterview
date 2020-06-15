import React , {useContext} from 'react';
import {InterviewContext} from './context/InterviewContext';
import './CandidatsList.css';
import Candidat from './Candidat';

export default () => {



    const { userCandidates, selectCandidate, unselectCandidate, selectedCandidates } = useContext(InterviewContext);
    
    const putInSelectedCandidates = (id) => {
      const candidateToSelect = userCandidates.find(cand=>cand.id == id);
      selectCandidate(candidateToSelect);
    }
    
    return (
     <div className="candidatsList">
         {userCandidates && userCandidates.map(c=><Candidat 
         key={c.id} id={c.id} 
         selectCandidate={putInSelectedCandidates} 
         unselectCandidate={unselectCandidate}
         selectedCandidates={selectedCandidates}
          prenom={c.prenom} nom={c.nom} 
          email={c.email} />)
        }      
      </div>
    );
}




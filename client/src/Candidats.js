import React from 'react';
import CandidatsList from './CandidatsList';
import SelectedCandidates from './SelectedCandidates';
import './Candidats.css';

export default ({redirect}) => {
    return (
        <div className="candidats">
            <CandidatsList />
            <SelectedCandidates redirect={redirect}/>
        </div>
    )
}
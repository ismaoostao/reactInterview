import React, {useState, useEffect} from 'react';
import Interview from '../Interview';

export const InterviewContext = React.createContext();

const InterviewContextProvider = ({children})=> {

  const [userCandidates, setUserCandidates] = useState([]);
   
  useEffect(()=>{
    const fetchUserCandidates = async () => {
      const response = await fetch ('/candidates/4');
      const userCandidates = await response.json();
      console.log('CONTEXT USEEFFECT / userCandidates : ', userCandidates);

       setUserCandidates(userCandidates);
       console.log('this.state.userCandidates : ', userCandidates);
       return;
       
    }
    fetchUserCandidates(); 
  }, [])
  
  const name = 'himmi';
  const value = {name, userCandidates}
        return (
            <InterviewContext.Provider value={value}>
              {children }
            </InterviewContext.Provider>
        )
    
}


export default InterviewContextProvider;

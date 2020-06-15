import React, { useEffect, useContext, useState } from 'react';
import socketIOClient from "socket.io-client";
import './chatRoom.css';
import { InterviewContext } from './context/InterviewContext';

export default (props) => {

    const [message, setMessage] = useState("");
    const { selectedCandidates } = useContext(InterviewContext);
    const [ candidateDisconnected, setCandidateDisconnected ] = useState(false);
    const [ messages, setMessages ] = useState({response: false,
      endpoint: "http://localhost:4000"});

      const {endpoint} = messages;
      const socket = socketIOClient(endpoint);

      socket.on("candidateDisconnected", ()=>{
        setCandidateDisconnected(true);
        setTimeout(()=>{
          setCandidateDisconnected(false);
        }, 1000)
      })

      useEffect(()=>{
        socket.on("FromAPI", data => setMessages({response: data}));
      }, [])

      const onChangeMessage = (e)=>{
        setMessage(e.target.value);
      }
    
      const sendMessage = (e) => {
        e.preventDefault();
        if(message){
          socket.emit('newMessage', message);
          setMessage("");
        }
      }

      useEffect(()=>{
        console.log('messages : ', messages);
      }, [messages]);
    
    const candidate = selectedCandidates[0];
    console.log('candidate : ', candidate);
    return (
        <div className="chatRoom">

            <div className="retour"
            onClick={()=>props.history.push('/')}>Retour
            </div>
            <h1>{`Interview - ${candidate.prenom} ${candidate.nom}`}</h1>

            <div className="chatRoomOptions">

                <div className="chatTools">
                    <div className="option">Chat Vidéo</div>
                    <div className="option">Living Code</div>
                </div>

                <div className="chatWindow">
                { candidateDisconnected && <p>Un utilisateur a quitté le chat</p> }
                    <div id="chatContainer">
                            <div id="messagesDiv">
                            <h2>Messages</h2>
                                {
                                messages.response.length > 0 ? <ul>
                                {messages.response.map(message=><li>{message}</li>)}
                                </ul> : ""
                                }
                            </div>

                            <div id="saisieMessage">
                                <form id="messageForm">
                                    <label>Ecrire votre message : </label>
                                    <input type="text" id="message"
                                    value={message}
                                    onChange={(e)=>onChangeMessage(e)} />
                                    <button onClick={e=>sendMessage(e)}>Envoyer</button>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
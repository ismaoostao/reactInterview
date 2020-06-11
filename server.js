const express = require('express');
const http = require('http');
const path = require('path');
const bp = require('body-parser');

const app = express();
const server = http.createServer(app);
const PORT = process.env.port || 4000;
server.listen(PORT, ()=>{
  console.log(`listening at port ${PORT}`);
})


/*  chat socket io
const socketio = require('socket.io');
const io = socketio(server);


const messages = [];

io.on('connection', (socket)=>{

  socket.on('newMessage', (message) => {
    if(messages.length == 16){
      messages.shift();
    }
    messages.push(message);
    io.emit("FromAPI", messages);
  })

  socket.on('disconnect', ()=>{
    io.emit('candidateDisconnected');
  })
})

*/


app.use(bp.json());
app.use(express.static(path.join(__dirname, 'client/build')));

const users = [
  {id: 4, candidatesId: [24, 51, 76]}, 
  {id: 79, candidatesId: [87, 149, 563]}
];

const candidates = [
    {
    id:51, userId: 4, email: "lalou.zacharie@oostaoo.com", nom: 'Lalouche', prenom: 'Zakouche'
    },
    {
    id:24, userId: 4, email: 'hamdoun.ismael@oostaoo.com', nom: 'Maz', prenom: 'Isma'
    },
    {
    id:76, userId: 4, email: 'famady@oostaoo.com', nom: 'Trankillouche', prenom: "Famadouche"
    }
]

app.get('/candidates/:userId', async (req, res) => {
  console.log('haha');
  const userId = req.params.userId;
  let userCandidates = candidates.filter(c=>c.userId == userId);
  console.log('candidates : ', typeof(userCandidates));
  res.send(JSON.stringify(userCandidates));
})


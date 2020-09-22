import http from 'http';
import socketIO from 'socket.io';
import { startGame } from './game';


// Créer le serveur http et écris Hello word
const server = http.createServer((req,res)=>{
    res.write('Hello world');
    res.end();
});
// Créer l'objet de type server
const io = socketIO(server);
// Quand quelqu'un se connecte , affiche un message dans la console
// const Player = { socket, name, pokemon };
 const players = []; 
// const start game = () =>{
// const pokemon = pokemon[Math.floor.random()* 5)] pas fini    
//}

// io.on => ecoute un evenement
io.on('connection', socket => {    
    console.log('someone is connected');
// Recupère le nom du user génrérer et passer dans index.html    
    const name = socket.handshake.query.name;
    const current_player = new player(name);
    players.push(current_player); // Attention, il ne faut pas lire le lire socket jsp où sous risque de boucle
// Ici faire les actions ( je crois )
// if player.length === 2){ 
//    startgame();
//}
    socket.emit('connected' ,'you are connected');
// Si déconnexion, affiche sur la log disconnected    
    socket.on('disconnect', () => {
        console.log('someone has disconnected');
        // retire le joueur de la connection
        players.pop(name);
    });
});

// initialise le port
const port = 3000;
// il va sur le port ( aka il ecoute le port)
server.listen(port, () => {
    console.log(`Server listening: http://localhost:${port}`);

});

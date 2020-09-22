import http from 'http';
import socketIO from 'socket.io';
// Créer le serveur http et écris Hello word
const server = http.createServer((req,res)=>{
    res.write('Hello world');
    res.end();
});
// Créer l'objet de type server
const io = socketIO(server);
// Quand quelqu'un se connecte , affiche un message dans la console
io.on('connection', socket => {
    console.log('someone is connected');
});
// initialise le port
const port = 3000;
// jsp
server.listen(port, () => {
    console.log(`Server listening: http://localhost:${port}`);

});

export default class player {
    name; 
    pokemon;
    socket;

    constructor(p_name,p_pokemon,p_socket){
        this.name = p_name;
        this.pokemon = p_pokemon;
        this.socket = p_socket;
    }
}
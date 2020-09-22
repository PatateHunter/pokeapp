import http from 'http';
import socketIO from 'socket.io';
import { startGame } from './game';

export const line = "<hr/>";   
export const lineJump = "<br/>"

export function if2PlayersAreConnectedAtOnceDoThis(dothis,players){
    if (players === 2)
    dothis(players);
    else
    console.log("2 players are not connected at once")
}

export function displayPlayers(players){
    for (const player in players) {
        document.getElementById("Result").innerHTML = line + player.name + lineJump;
        }
    }

   
 

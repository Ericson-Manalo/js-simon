/*
Ciao ragazze e ciao ragazzi!
Esercizio di oggi: :orologio1: Boom Countdown :collisione:
nome repo: js-simonTraccia
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!Consigli
Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno? *24*
Da quanti minuti è composta un'ora? *60*
Da quanti secondi è composto un minuto? *60*
Da quanti millisecondi è composto un secondo? *1000*
Quanti millisecondi mi separano da domani alle 9:30?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi?Buon divertimento a tutte e a tutti!*/

//creo variabile che mi indichi l'ora esatta in questo momento

const actualTime = new Date ();
let actualDay = addZero (actualTime.getDay(), 2);
let actualHours = addZero(actualTime.getHours(), 2);
let actualMinutes = addZero(actualTime.getMinutes(), 2);
let actualSeconds = addZero(actualTime.getSeconds(), 2);

let time = actualDay + ":" + actualHours + ":" + actualMinutes + ":" + actualSeconds;
document.getElementById('actual-time').innerHTML = time;




function addZero(x,n) { 
    while (x.toString().length < n) {
        x = "0" + x;
    }
    return x;
    }
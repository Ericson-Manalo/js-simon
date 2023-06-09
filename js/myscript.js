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


    //creo una variabile che indichi la data da cui parte il countdown
const futureTime = new Date ("May 26, 2023 09:30:00").getTime();

const clock = setInterval(function(){


    //creo variabile dove mi indica tempo attuale
    const actualTime = Date.now();

    //sottraggo il future time con actualtime --> ottengo il tempo in ms
    const timeLeft = futureTime - actualTime;


    let dayLeft = Math.floor (timeLeft / 1000 / 60/ 60 / 24);
    console.log(dayLeft);
    let hoursLeft = Math.floor(timeLeft / 1000 / 60 / 60);
    console.log(hoursLeft);
    let minutesLeft = Math.floor((timeLeft / 1000 / 60 / 60 - hoursLeft) * 60);
    console.log(minutesLeft)
    let secondsLeft = Math.floor (((timeLeft / 1000 / 60 / 60 - hoursLeft) *60 - minutesLeft) * 60);
    console.log(secondsLeft);

    let timeRemaining = dayLeft + ":" + hoursLeft + ":" + minutesLeft + ":" + secondsLeft;
    document.getElementById('time-left').innerHTML = timeRemaining;

}, 1000);

setTimeout(function(){
    alert("Let's start the lesson!!!!!!");
    clearInterval(clock);
}, futureTime);




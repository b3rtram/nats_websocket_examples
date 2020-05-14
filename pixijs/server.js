const NATS = require('nats');
const nc = NATS.connect({ json: true, servers: ['nats://localhost:5222'] });

console.log("start server");

player = [];

nc.subscribe('newPlayer', (msg) => {
    player.push(msg.data);
});

counter();

function counter() {

    let starting = 60;
    let timer = {};
    timer = setInterval(() => {
        console.log("startingIn "+starting); 
        nc.publish("startingIn", starting);
        starting = starting - 1;

        if (starting === 0) {
            clearInterval(timer);
            startGame(r);
        }

    }, 1000)
}

function startGame(room) {
    if(player.length === 0) {
        counter();
    } else {
        nc.publish("start", {});
    }

}


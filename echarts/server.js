const NATS = require('nats');

const csv = require('csv-parser');
const fs = require('fs');

console.log("start server");
const nc = NATS.connect({ json: true, servers: ['nats://localhost:5222'] });

nc.on('connect', () => {
    console.log("connection established")

    nc.on('error', (err) => {
      console.log(err)
    })

    setInterval(()=> {
      nc.publish("measureValues", {
        time: Date.now(),
        value: Math.random() * (30 - 10) + 10
      });
    }, 300);
  
});








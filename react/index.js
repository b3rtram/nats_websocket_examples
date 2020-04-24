const NATS = require('nats');

console.log("start server");
const nc = NATS.connect({ json: true, servers: ['nats://localhost:5222'] });

nc.on('connect', () => {
    console.log("connection established")

    nc.on('error', (err) => {
      console.log(err)
    })

    setInterval(()=> {
      nc.publish("newMessages", {
        text: "hello together"
      });
    }, 1000);
  
});


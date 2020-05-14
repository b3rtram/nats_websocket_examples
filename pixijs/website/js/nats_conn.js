let nats_conn = {

    // create a connection, and register listeners
    init: async function () {
        
        const Payload = nats.Payload
        // if the connection doesn't resolve, an exception is thrown
        // a real app would allow configuring the URL
        conn = await nats.connect({ url: 'wss://localhost:9222', payload: Payload.JSON })// handle errors sent by the gnatsd - permissions errors, etc.
        conn.addEventListener('error', (ex) => {
            console.log(ex)
        })

        // handle connection to the server is closed - should disable the ui
        conn.addEventListener('close', () => {
            console.log("close")
        });

        return conn;

    }

}
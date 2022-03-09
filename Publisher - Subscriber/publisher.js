//Source: 
// Install RabbitMQ => https://www.youtube.com/watch?v=wXfKmtohjpc
// Publisher Subscriber with Node => https://www.youtube.com/watch?v=vMFcayVfFvM

const amqp = require('amqplib/callback_api');

//connect with RabittMQ server
amqp.connect(`amqp://localhost`,(err, connection) => {
    if(err) {
        throw err;
    }
    connection.createChannel((err, channel) => {
        if(err) {
        throw err;
    }
    let queueName = "it-academy";
    
    let date_ob = new Date();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();

    let message = `Message from publisher to subscriber at ${hours + ":" + minutes + ":" + seconds }`;

    //Create queue if there is not queue in the server. 
    //Durable set to false so that queue is always available in the server. 
    channel.assertQueue(queueName,{
        durable: false
    })
    //Message has to be sent as a Buffer
    channel.sendToQueue(queueName, Buffer.from(message));
    console.log(`Message: ${message}`)
    setTimeout(()=>{
        connection.close();
    }, 1000)
}) 
})
import kafka from "./kafka.js";

const init=async()=>{
    const producer=kafka.producer();
    console.log("Connecting Producer....")
    await producer.connect();
    console.log("Producer Connected...");
    //send message
    await producer.send({
        topic:"Users-updates",
        messages:[
            {partition:0,key:"name",value:"Ashish"},
            {partition:1,key:"msg",value:"Hello KafkaJS user!"}
        ]
    
    })
    await producer.disconnect();
    console.log("Producer Disconnected");
}
init();
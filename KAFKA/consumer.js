import kafka from "./kafka.js";

const init=async()=>{
    const consumer=kafka.consumer({groupId:"test-group"});
    await consumer.connect();
    await consumer.subscribe({topic:"Users-updates",fromBeginning:true});
    await consumer.run({
        eachMessage:async ({topic,partition,message})=>{
            console.log(`Received Message on partition ${partition} and topic ${topic}`, message.value.toString());
        }
    })
}
init();
// Now run the consumer.js file and you will see the output in the terminal.

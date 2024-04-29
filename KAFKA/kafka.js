import { Kafka } from "kafkajs";


const kafka = new Kafka({
    clientId:"myapp",
    brokers:["localhost:9092"] //running machine
})
export default kafka;

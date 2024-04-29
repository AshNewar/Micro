const {Worker} =require("bullmq")
const IORedis = require("ioredis");

const connection = new IORedis({
    host: 'localhost',
    port: 6379,
    maxRetriesPerRequest: null 
  });

const send = () => new Promise(res => setTimeout(() => res(), 5 * 1000));

// If you're not using 'worker', you don't need to assign the new Worker to a variable
new Worker("notification", async (job) => {
    console.log("Sending notification", job.data.message);
    await send();
    console.log("Notification sent");
},{ connection });
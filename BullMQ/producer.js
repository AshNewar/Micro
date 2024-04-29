const {Queue} =require("bullmq")

const notificationQueue = new Queue("notification");
async function sendNotification(message){
    const res=await notificationQueue.add("sendNotification",{
        message
    })
    console.log("Done" ,res.id);
}

sendNotification("Hello World")
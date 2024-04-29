import kafka from "./kafka.js";

const init=async()=>{
    const admin=kafka.admin();
    console.log("Connecting Admin....")
    admin.connect()
    console.log("Admin Connected...");
    //create TOpics 
    console.log("Creating Topics...")
    await admin.createTopics({
        topics:[{
            topic:"Users-updates",
            numPartitions:2
        }]
    });
    console.log("Topics Created");
    await admin.disconnect();
    console.log("Admin Disconnected");
}
init();
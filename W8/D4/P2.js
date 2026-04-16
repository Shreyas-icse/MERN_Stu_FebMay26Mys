//Timestamp and Advanced queries
const mongoose = require("mongoose");
async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/datedb");
        console.log("Connected to MongoDB");

        const demoschema = new mongoose.Schema({
            name: String,

        }, {
            timestamps: true
        });
        const Model = mongoose.model('LogTime', demoschema);
        // await Model.deleteMany();
        // await Model.create([
        //     { name: "Anshka" },
        //     { name: "pooja" },
        //     { name: "sara" }
        // ]);
        const recent = await Model.find({
            createdAt:{
                $gte:new Date(Date.now()-900000)
            }
        }).sort({createdAt:-1});
       
        console.log("Recent:",recent);
        
    }
    catch (error) {
        console.error("error:", message.error);
    }
    finally {
        await mongoose.disconnect();
        console.log("Disconnected from DB");
    }
}
main();
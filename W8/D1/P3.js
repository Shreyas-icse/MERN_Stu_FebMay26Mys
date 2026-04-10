//Applied filters to the query using comparision operators
const mongoose = require("mongoose");

async function runFilterDemo() {
    try {
        await mongoose.connect("mongodb://localhost:27017/merntraining");//to connect with db
        console.log("MongoDB connected successfully");

        const productSchema = new mongoose.Schema({
            name: String,
            price: Number,
            categeory: String,
            status: String
        });
        const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
        //  await Product.deleteMany({ status: "demo-student" });
        await Product.create([{
            name: "chair",
            price: 200,
            categeory: "Things",
            status: "active"
        },
        {
            name: "mobile",
            price: 20220,
            categeory: "electronics",
            status: "active"
        },
        {
            name: "washingmachine",
            price: 20520,
            categeory: "electronics",
            status: "inactive"
        }, {
            name: "bluetooth",
            price: 520,
            categeory: "electronics",
            status: "inactive"
        }]);

        const equalQuery = await Product.find({ status: { $eq: "active" } });
        console.log("products which are active", equalQuery);

        const greaterQuerys = await Product.find({ price: { $gt: 520 } });
        console.log("products which are greater 520 rs", greaterQuerys);

        const lesserQuerys = await Product.find({ price: { $lt: 520 } });
        console.log("products which are greater 520 rs", lesserQuerys);

         const notequalQuerys = await Product.find({ name: {$ne:"bluetooth"} });
        console.log("products which are greater 520 rs", notequalQuerys);



        await mongoose.connection.close();
        console.log("connection closed");

    }
    catch (error) {
        console.log("filter demo error :", error.message);

    }
}
runFilterDemo();
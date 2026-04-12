//Sorting limiting and the pagination
const mongoose=require("mongoose");
const Product=require("./P3")

async function sortPagination() {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/merntrainig");//to connect with DB
        console.log("MongoDB connected successfully");

        // const sortedAscending=await Product.find({categeory:"Stationary"}).sort({price:1});
        // console.log("sorting in ascending order:",sortedAscending);

        // const sortedDescending=await Product.find({categeory:"Stationary"}).sort({price:-1});
        // console.log("sorting in sortedDescending order:",sortedDescending);

        //limit() retricts resultvcount
        // const limitedResults=(await Product.find({categeory:"Stationary"})).toSorted({createOrder:1}).limit(2);
        // console.log("limited results:",limitedResults);

        //pagination
        const page=2;
        const limitcount=2;
        const skipCount=(page-1)*limitcount;

        const paginationedResult=await Product.find({categeory:"Stationary"}).sort({createOrder:1}).skip(skipCount).limit(limitcount);
        console.log("PaginationedResult:",paginationedResult);
        
        
        
        await mongoose.connection.close();
        console.log("Connection closed");
    }
    catch(error){
    console.log("Crud demo error",error.message);         
        }
}
sortPagination();
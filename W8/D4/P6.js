//implement OTP generation and verification with expiry and attempt limit
const crypto = require('crypto');
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/datedb1")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

const otpSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    otp: {
        type: String,
        required: true
    },
    expiresAt: {
        type: Date,
        required: true,
        index: { expires: 0 }
    },
    attempts: {
        type: Number,
        default: 0
    }
});

const OTP = mongoose.model('OTP', otpSchema);

async function generateOTP(userId) {
    const otp = crypto.randomInt(100000, 999999).toString();

    await OTP.findOneAndUpdate(
        {userId},
        {
            userId,
            otp,
            expiresAt:new Date(Date.now() + 6000),
            attempts:0
        },
        {
            upsert: true,//if doc does not exist create one
            returnDocument:'after' 
        }
    );
    console.log("OTP: ",otp);  
}

async function verifyOTP(userId,enteredOtp){
    const record = await OTP.findOne({userId});

     if(!record) {return "No OTP";}
    if(Date.now()>record.expiresAt) return "Expired";
    if(record.attempts >= 3) return "Blocked";
    
    record.attempts++;
   if(record.otp === String(enteredOtp)){
    await OTP.deleteOne({userId});
    return "Valid";
   }
   await record.save();
   return "Invalid";
}

async function main() {
    await generateOTP("user1");

    const storedRecord = await OTP.findOne({userId:"user1"});
    const userEnteredOtp = storedRecord.otp;
    //for expiry
    //   setTimeout(async () => {
    //     const result = await verifyOTP("user1", userEnteredOtp);
    //     console.log(result);

    //     await mongoose.connection.close();
    // }, 7000);
    //for max attempts
     console.log(await verifyOTP("user1", "111111")); // 1st wrong
    console.log(await verifyOTP("user1", "222222")); // 2nd wrong
    console.log(await verifyOTP("user1", "333333")); // 3rd wrong
    console.log(await verifyOTP("user1", "444444")); // blocked
     await mongoose.connection.close();
    console.log("DB connection closed");
}

    //for happ scenario
    // const result = await verifyOTP("user1",userEnteredOtp);

    // console.log(result);
    // await mongoose.connection.close();
    // console.log("DBconnection closed");  

main();
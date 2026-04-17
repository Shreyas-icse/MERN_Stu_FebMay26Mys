//Generating OTP using crypto and hashing it using bcrypt
const crypto = require('crypto');
const bcrypt = require('bcrypt');

function generatedOTP(length = 6){
    return crypto.randomInt(100000,999999).toString();
}

async function hashOTP(otp){
    return await bcrypt.hash(otp,10);
}

async function verifyOTP(input,hash){
    return await bcrypt.compare(input,hash);
}

(async () => {
    const otp = generatedOTP();
    console.log("Generated otp: ",otp);

    const hashedOtp = await hashOTP(otp);
    console.log("Hashed otp: ",hashedOtp);

    console.log("verification: " , await verifyOTP(otp,hashedOtp));   
})();
//push the hash otp to db and verify it and comparision
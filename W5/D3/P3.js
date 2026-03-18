//Handiling errors with try/catch

function loadCustomerProfile(){
    return new Promise(function(resolve,reject){
        const isServiceAvailable = true;//false error
        if(isServiceAvailable){
            resolve("success! Customer profile loaded.");
        }
        else{
            reject("Unsuccessfull! Customer profile unavilable.");
        }
    });
}

async function showCustomerProfile(){
 try{

   const message = await loadCustomerProfile();
    console.log(message);
 }
 catch(error){
    console.error("Error:",error);
    
 }
    
}
showCustomerProfile();
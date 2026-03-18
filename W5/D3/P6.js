// await with non-promise value
function getReadyValue(){
    return 25;
}
function getDelayedvalue(){
    return Promise.resolve(75);
}
async function showValues(){
    const readyValue = await getReadyValue();//no need of await
    const delayedValue = await getDelayedvalue();

    console.log("Ready Value: ",readyValue);
    console.log("Delayed Value: ",delayedValue);
    
    
}
showValues();
//Cookie is used to tarck session ID

//Simulated server side session store
const sessionStore = {
    "abc123":{
        userId:101,
        username:"Shreyas",
        role:"student"
    }
};
//Simulated browser cookie value
const browserCookieSessionId = "abc123";
const sessionData = sessionStore[browserCookieSessionId];
console.log("server-side session data:",sessionData);



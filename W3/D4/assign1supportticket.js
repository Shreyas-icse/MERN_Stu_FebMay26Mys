let ticket =[
    {id:"t101",priority:"high",resolved:true},
    {id:"t102",priority:"low",resolved:false},
    {id:"t103",priority:"low",resolved:false},
    {id:"t104",priority:"high",resolved:true},
    {id:"t105",priority:"medium",resolved:false}

];
//urgent ticket
ticket.unshift({id:"t106",priority:"high",resolved:true});
console.log(ticket);
//two normal tickets
ticket.push({id:"t107",priority:"medium",resolved:true},);
ticket.push({id:"t108",priority:"high",resolved:true},);
console.log(ticket);
//shift ticket and store in current ticket
ticket.shift();
let currentticket=ticket.shift();
console.log(currentticket);
//pop and store in dropped ticket
ticket.pop();
let droppedticket=ticket.pop();
console.log("droppedticket:",droppedticket);
//filter unresolved tickets
let unresolvedticket = ticket.filter(tkt=>tkt.resolved!=true);
console.log("unresolvedticket:",unresolvedticket);
//pending tickets
let pendingid =unresolvedticket.map(pendingid=>pendingid.id);
console.log(pendingid);








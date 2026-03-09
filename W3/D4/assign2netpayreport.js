// let employees=[
//     {name:"shreyas",basepay:30000,taxrate:0.1,bonus:1000},
//     {name:"pavan",basepay:65000,taxrate:0.3,bonus:1000},
//     {name:"vinay",basepay:45000,taxrate:0.7,bonus:1000},
//     {name:"raky",basepay:25000,taxrate:0,bonus:1000}
// ];

// let invalidrecords = employees.filter(employee=>employee.basepay>0 && employee.bonus>=0&& employee.taxrate>0&& employee.taxrate<1);
// console.log(invalidrecords);


// let netpayreport = employees.map(employee=>{let gross=employees.basepay+employees.bonus,
//      netpay=gross-(gross*employees.taxrate)



// });

// console.log(netpayreport);



let employees = [
    {name:"shreyas", basepay:30000, taxrate:0.1, bonus:1000},
    {name:"pavan", basepay:65000, taxrate:0.3, bonus:1000},
    {name:"vinay", basepay:45000, taxrate:0.7, bonus:1000},
    {name:"raky", basepay:25000, taxrate:0, bonus:1000}
];

// filter valid records
let validrecords = employees.filter(employee =>
    employee.basepay > 0 &&
    employee.bonus >= 0 &&
    employee.taxrate > 0 &&
    employee.taxrate < 1
);

console.log(validrecords);

// calculate net pay
let netpayreport = validrecords.map(employee => {
    let gross = employee.basepay + employee.bonus;
    let netpay = gross - (gross * employee.taxrate);

    return {
        name: employee.name,
        gross: gross,
        netpay: netpay
    };
});

console.log(netpayreport);

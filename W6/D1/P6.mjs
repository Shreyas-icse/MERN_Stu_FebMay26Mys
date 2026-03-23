//import ES Modules

import createInvoiceLable,{calculateTotal,taxrate} from "./P5.mjs";//default export is first and rest because it is name export
const subtotal = 4000;
const total = calculateTotal(subtotal);
const lable = createInvoiceLable("INV-2026-001");
console.log("Invoice Lable: ",lable);
console.log("Tax-Rate: ",taxrate);
console.log("final total: ",total);


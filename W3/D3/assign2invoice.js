function invoice(gstRate = 0.18, ...items) {
  let subtotal = 0;

  for (let item of items) {
    // Stop processing completely if "STOP" is found
    if (item.name === "STOP") break;

    // Destructure for readability
    const { price, qty } = item;

    // Ignore invalid items
    if (
      price === undefined || 
      qty === undefined || 
      price <= 0 || 
      qty <= 0
    ) {
      continue;
    }

    subtotal += price * qty;
  }

  const gst = subtotal * gstRate;

  return {
    subtotal: subtotal,
    gst: gst,
    total: subtotal + gst
  };
}

// Example usage:
console.log(invoice(0.18, {name: "Pen", price: 10, qty: 3}, {name: "STOP"}));
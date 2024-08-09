// (PART C) SET PRICE EACH (WHEN CHOOSING ITEM)
price : item => { if (items[item.value]) {
    item.nextElementSibling.value = items[item.value];
  }},
  
  // （PART D）ADD ITEM
  add : calc => {
    // (D1) CLONE NEW ITEM ROW
    let row = invoice.hAdd.cloneNode(true),
        qty = row.querySelector(".qty"),
        item = row.querySelector(".item"),
        price = row.querySelector(".price"),
        act = row.querySelector(".action");
    row.removeAttribute("id");
    qty.required = true;
    qty.setAttribute("onchange", "invoice.total()");
    item.required = true;
    price.required = true;
    price.setAttribute("onchange", "invoice.total()");
    act.value = "X";
    act.setAttribute("onclick", "invoice.remove(this.parentElement)");
    document.getElementById("itemsList").appendChild(row);
  
    // (D2) RESET ADD ITEM
    for (let i of invoice.hAdd.querySelectorAll("input:not(.action)")) {
      i.value = "";
    }
  
    // (D3) CALCULATE TOTAL
    if (calc) { invoice.total(); }
  },
  
  // (PART E) REMOVE ITEM
  remove : row => {
    row.remove();
    invoice.total();
  },
  
  // (PART F) CALCULATE TOTAL
  total : () => {
    let total = 0;
    for (let row of invoice.hItems.querySelectorAll(".irow")) {
      let qty = parseInt(row.querySelector(".qty").value),
          price = parseFloat(row.querySelector(".price").value);
      if (isNaN(qty) || isNaN(price)) { continue; }
      total += qty * price;
    }
    invoice.hTotal.innerHTML = "Grand Total: $" + total.toFixed(2);
  },
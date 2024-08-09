var invoice = {
    // (PART A) PROPERTIES
    hNum : null,   // html invoice number
    hDate : null,  // html invoice date
    hBill : null,  // html bill to
    hItems : null, // html items list
    hAdd : null,   // html add item row
    hData : null,  // html items datalist
    hTotal : null, // html total amount
    hLoad : null,  // html load invoice
  
    // (PART B) INIT ITEMS LIST
    init : () => {
      // (B1) GET HTML ELEMENTS
      invoice.hNum = document.getElementById("inNum");
      invoice.hDate = document.getElementById("inDate");
      invoice.hBill = document.getElementById("inBill");
      invoice.hItems = document.getElementById("itemsList");
      invoice.hAdd = document.getElementById("itemsAdd");
      invoice.hData = document.getElementById("itemsData");
      invoice.hTotal = document.getElementById("totals");
      invoice.hLoad = document.querySelector("#loader input[type=file]");
  
      // (B2) POPULATE ITEMS DATALIST
      for (let i of Object.keys(items)) {
        let row = document.createElement("option")
        row.value = i;
        invoice.hData.appendChild(row);
      }
    },
    // ...
  };
  
  // (PART J) START
  window.addEventListener("load", invoice.init);
// (PART I) PRINT INVOICE
print : () => {
    // (I1) CHECK FOR ITEMS
    if (invoice.hItems.querySelectorAll(".irow").length==0) {
      alert("Please add at least one item.");
      return false;
    }
  
    // (I2) OPEN PRINT PAGE
    let page = window.open("print.html");
    page.onload = () => {
      // (I2-1) INVOICE
      page.document.getElementById("billto").innerHTML = "<strong>BILL TO:</strong><br>" + invoice.hBill.value.replace(/\n/g, "<br>");
      page.document.getElementById("inNum").innerHTML = "<strong>INVOICE #: </strong>" + invoice.hNum.value;
      page.document.getElementById("inDate").innerHTML = "<strong>DATE: </strong>" + invoice.hDate.value;
  
      // (I2-2) ITEMS
      for (let row of invoice.hItems.querySelectorAll(".irow")) {
        let clone = row.cloneNode(true);
        clone.querySelector(".action").remove();
        for (let i of clone.querySelectorAll("input")) { i.readOnly = true; }
        page.document.getElementById("items").appendChild(clone);
      }
  
      // (I2-3) TOTALS
      page.document.getElementById("totals").innerHTML = invoice.hTotal.innerHTML;
  
      // (I2-4) PRINT INVOICE
      page.print();
    };
    return false;
  }
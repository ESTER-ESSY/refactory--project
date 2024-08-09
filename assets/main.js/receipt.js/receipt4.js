// (PART G) SAVE INVOICE
save : () => {
    // (G1) GET INVOICE DATA
    let data = {};
    data.num = invoice.hNum.value;
    data.date = invoice.hDate.value;
    data.bill = invoice.hBill.value;
    data.items = [];
    for (let row of invoice.hItems.querySelectorAll(".irow")) {
      let item = [];
      for (let i of row.querySelectorAll("input:not(.action)")) {
        item.push(i.value);
      }
      data.items.push(item);
    }
  
    // (G2) CONSTRUCT BLOB & "FORCE DOWNLOAD"
    let url = window.URL.createObjectURL(
      new Blob([JSON.stringify(data)], { type: "application/json" })
    );
    let a = document.createElement("a");
    a.href = url;
    a.download = "invoice.json";
    a.click();
    window.URL.revokeObjectURL(url);
  },
  // (PART H) LOAD INVOICE
load : () => {
    // (H1) FILE READER
    const reader = new FileReader();
  
    // (H2) DRAW INVOICE
    reader.onload = e => {
      invoice.hLoad.value = "";
      try {
        let data = JSON.parse(reader.result);
        invoice.hNum.value = data.num;
        invoice.hDate.value = data.date;
        invoice.hBill.value = data.bill;
        invoice.hItems.innerHTML = "";
        for (let row of data.items) {
          invoice.hAdd.querySelector(".qty").value = row[0];
          invoice.hAdd.querySelector(".item").value = row[1];
          invoice.hAdd.querySelector(".price").value = row[2];
          invoice.add();
        }
        invoice.total();
      } catch (e) {
        alert("Error loading file");
        console.error(e);
      }
    };
  
    // (H3) ERROR READING
    reader.onerror = e => {
      alert("Error loading file");
      console.error(e);
    };
  
    // (H4) GO!
    reader.readAsText(invoice.hLoad.files[0]);
  },
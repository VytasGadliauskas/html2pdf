/*import { jsPDF  } from "jspdf";
var doc = new jsPDF();

function saugotiPDF() {
    doc.fromHTML(`<html><head><title>Saskaita</title></head><body>` + document.getElementById("saskaita").innerHTML + `</body></html>`);
    doc.save('saskaita.pdf');
} */ 


function spausdinti() {
    const printContents = document.getElementById('saskaita').innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}



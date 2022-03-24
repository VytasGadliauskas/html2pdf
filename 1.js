function spausdinti() {
    const printContents = document.getElementById('saskaita').innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}

function eksportuotiPDF() {

}
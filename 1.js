function saugotiPDF() {
    var element = document.getElementById('saskaita');
        element.style.border = "none";
 
    var opt = {
        margin:       0,
        filename:     'saskaita.pdf',
        image:        { type: 'png', quality: 1 },
        html2canvas:  { scale: 1 },
        jsPDF:        { unit: 'in', format: 'A4', orientation: 'landscape' }
      };
      
      html2pdf().set(opt).from(element).save();
}  


function spausdinti() {
    const printContents = document.getElementById('saskaita').innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}



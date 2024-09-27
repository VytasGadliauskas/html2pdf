function saugotiPDF() {
    var element = document.getElementById('saskaita');
        element.style.border = "none";
 
    var opt = {
        margin: 0,
        filename: 'saskaita.pdf',
        image: { 
          type: 'png',
           quality: 1
          },
        html2canvas: { scale: 1 },
        // gana neiprastai ziurisi dideli tarpai objektuose
        // jei objektas turi du ar daugiau key - value poru
        // jas rasyciau is naujos eilutes. Tai pagerina skaitomuma
        jsPDF: { 
          unit: 'in',
          format: 'A4',
          orientation: 'landscape' 
        }
      };
      // kadangi naudojama isorine biblioteka butu galima
      // paaiskinti kokie veiksmai atliekami. Siuo atveju
      // logika nera sudetinga todel nebutina. 
      // README.md galima prideti prierasa apie panaudotas 
      // treciuju saliu bibliotekas.
      html2pdf().set(opt).from(element).save();
      element.style.border = "solid 1px grey";
}  


function spausdinti() {
    const printContents = document.getElementById('saskaita').innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}



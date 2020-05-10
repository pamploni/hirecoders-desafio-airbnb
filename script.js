var xmlhttp = new XMLHttpRequest();
var url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        criarGrade(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function criarGrade(arr) {
    let conteudo = '';
    console.log(arr);
    arr.map(ar => {
      conteudo += `
       
        <div class="card">
          <img id ="photo" src=${ar.photo} alt="Avatar" style="width:100%">
          <div class="container">
            <h4><b>${ar.property_type}</b></h4>
            <p>${ar.name}</p>
            <h5>${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(ar.price)}</h5>
          </div>
        </div>
      `;
    })

    document.getElementById("lista").innerHTML = conteudo;
}
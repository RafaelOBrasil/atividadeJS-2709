
function resultado(){
    let n1 = parseFloat(document.querySelector("#n1").value);
    let n2 = parseFloat(document.querySelector("#n2").value);
    let n3 = parseFloat(document.querySelector("#n3").value);
    let media = document.querySelector("#media");
    let maior = document.querySelector("#maior");
    let menor = document.querySelector("#menor")

    var n = [n1,n2,n3];

    let ress = (n1+n2+n3)/3

    if(n1 && n2 && n3 != null){
        media.innerHTML = ress.toFixed(2);

        maior.innerHTML = Math.max(...n).toFixed(2);
    
        menor.innerHTML = Math.min(...n).toFixed(2);
    }else{
        media.innerHTML = "vazio"

        maior.innerHTML = "Vazio"

        menor.innerHTML = "Vazio"
    }



}






function sidaxe(){
    var pro1 = parseFloat(document.getElementById("pro1").value);
    var pro2 = parseFloat(document.getElementById("pro2").value);
    var pro3 = parseFloat(document.getElementById("pro3").value);
    var pro4 = parseFloat(document.getElementById("pro4").value);
    var pro5 = parseFloat(document.getElementById("pro5").value);

    var res = pro1 + pro2 + pro3 + pro4 + pro5;

    document.getElementById("res").innerHTML = "Le résultat est : " + res;
}


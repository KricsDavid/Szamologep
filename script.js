function plusz(){
    elso = parseInt(document.getElementById("elso").value);
    masodik = parseInt(document.getElementById("masodik").value);
    document.getElementById("Eredmeny").innerHTML = elso + masodik;
}

function minusz(){
    elso = parseInt(document.getElementById("elso").value);
    masodik = parseInt(document.getElementById("masodik").value);
    document.getElementById("Eredmeny").innerHTML = elso - masodik;
}

function szor(){
    elso = parseInt(document.getElementById("elso").value);
    masodik = parseInt(document.getElementById("masodik").value);
    document.getElementById("Eredmeny").innerHTML = elso * masodik;
}

function oszt(){
    elso = parseFloat(document.getElementById("elso").value);
    masodik = parseFloat(document.getElementById("masodik").value);
    document.getElementById("Eredmeny").innerHTML = elso / masodik;
}
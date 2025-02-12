function tikla() {
    alert("merhaba hoşgeldiniz");
    
}
function renkdegistir() {
    document.getElementById("tasiyici").style.backgroundColor="red";
    
}
function renkdegistir1() {
    document.getElementById("tasiyici").style.backgroundColor="blue";
    
}
function renkdegistir2() {
    document.getElementById("tasiyici").style.backgroundColor="green";
    
}
function yazidegistir() {document.getElementsByClassName("prg")[0].style.backgroundColor="gray";
    document.getElementsByClassName("prg")[0].style.fontSize="30px";

    
}
function ekle() { 
    document.getElementsByTagName("p")[1].style.bordermSize="10px";
    document.getElementsByTagName("p")[1].style.borderStyle="solid";
    document.getElementsByClassName("p")[1].style.backgroundColor="pink";
}
function topla() {
    var s1 = parseInt(document.getElementById("sayi1").value);
    var s2 = parseInt(document.getElementById("sayi2").value);
    var sonuc= s1 +s2;
    document.getElementById("sonuc").value=sonuc;

    
}
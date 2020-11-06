function hasil() {
    let no = /^\d{10,12}$/g
    var teks = $('#input').val();
    var panjang = teks.length
    let hasil2 = no.test(teks)
    document.getElementById("jawab").innerHTML = "Status " + hasil2;
    document.getElementById("jawab1").innerHTML = "Panjang No Hp anda adalah " + panjang;
    console.log(hasil2)
    console.log(panjang)
}
function hasil() {
  let search = /^Bagaimana cara memulai usaha bisnis$|^Bootcamp impact byte$|^Status covid hari ini$/;
  var teks = $('#input').val();
  let status = search.test(teks);
  if (status) {
    document.getElementById("jawab1").innerHTML = "Hasil pencarian anda ditemukan";
    document.getElementById("jawab").innerHTML = teks;
  } else {
    document.getElementById("jawab1").innerHTML = "Hasil pencarian anda tidak ditemukan";
    document.getElementById("jawab").innerHTML = "";
  }

}
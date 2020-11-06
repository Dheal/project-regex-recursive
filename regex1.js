function hasil() {
  let besar = /^[A-Z]/;
  var teks = $("#input").val();
  var tes = besar.test(teks);
  if (tes) {
    document.getElementById("jawab").innerHTML =
      "Huruf pertama adalah huruf besar";
    console.log("Huruf pertama adalah huruf besar");
  } else {
    document.getElementById("jawab").innerHTML =
      "Huruf pertama adalah huruf kecil";
    console.log("Huruf pertama adalah huruf kecil");
  }
}